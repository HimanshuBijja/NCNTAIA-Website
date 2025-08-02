import React, { useState } from "react";
import {
    X,
    ChevronRight,
    Mail,
    Phone,
    Building2,
    FileText,
    Tag,
    User,
    CheckCircle,
    UserCheck,
    Send
} from "lucide-react";

import axios from "axios";

// Type definitions
interface FormData {
    firstname: string;
    lastname: string;
    email: string;
    mobile: string;
    institution: string;
    abstract: string;
    keywords: string[];
    inperson: boolean;
    accept_terms: boolean;
}

interface FormErrors {
    [key: string]: string;
}

interface ValidationResult {
    errors: FormErrors;
    isValid: boolean;
}

// UI Component props interfaces
interface LabelProps {
    children: React.ReactNode;
    htmlFor?: string;
    className?: string;
    [key: string]: any;
}

interface InputProps {
    className?: string;
    [key: string]: any;
}

interface CheckboxProps {
    className?: string;
    [key: string]: any;
}

interface LabelInputContainerProps {
    children: React.ReactNode;
    className?: string;
}

interface LabelIconProps {
    children: React.ReactNode;
    className?: string;
}

// Mock UI components with proper typing
const Label: React.FC<LabelProps> = ({ children, htmlFor, className = "", ...props }) => (
    <label htmlFor={htmlFor} className={`text-sm font-medium text-gray-700 ${className}`} {...props}>
        {children}
    </label>
);

const Input: React.FC<InputProps> = ({ className = "", ...props }) => (
    <input
        className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
        {...props}
    />
);

const Textarea: React.FC<InputProps> = ({ className = "", ...props }) => (
    <textarea
        className={`flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
        {...props}
    />
);

const Checkbox: React.FC<CheckboxProps> = ({ className = "", ...props }) => (
    <input
        type="checkbox"
        className={`h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${className}`}
        {...props}
    />
);

// Validation function with proper typing
const validateForm = (data: FormData): ValidationResult => {
    const errors: FormErrors = {};
    
    if (!data.firstname?.trim()) errors.firstname = "First name is required";
    if (!data.lastname?.trim()) errors.lastname = "Last name is required";
    if (!data.email?.trim()) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Invalid email address";
    }
    if (!data.mobile?.trim()) {
        errors.mobile = "Mobile number is required";
    } else if (data.mobile.length < 10 || data.mobile.length > 10) {
        errors.mobile = "Mobile number must be exactly 10 digits";
    }
    if (!data.institution?.trim()) errors.institution = "Institution is required";
    if (!data.abstract?.trim()) {
        errors.abstract = "Abstract is required";
    } else if (data.abstract.length < 10) {
        errors.abstract = "Abstract must be at least 10 characters";
    }
    
    // Keywords validation
    if (!data.keywords || !Array.isArray(data.keywords)) {
        errors.keywords = "Keywords are required";
    } else if (data.keywords.length < 3) {
        errors.keywords = "Please enter at least 3 keywords";
    } else if (data.keywords.length > 7) {
        errors.keywords = "Please enter at most 7 keywords";
    }
    
    if (!data.accept_terms) {
        errors.accept_terms = "You must accept the terms and conditions";
    }
    
    return { errors, isValid: Object.keys(errors).length === 0 };
};

const AbstractForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        institution: "",
        abstract: "",
        keywords: [],
        inperson: false,
        accept_terms: false,
    });
    
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    // Update form data and clear errors
    const updateFormData = (field: keyof FormData, value: string | boolean | string[]): void => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: "" }));
        }
    };

    // Keyword management with proper typing
    const addKeyword = (value: string): void => {
        const trimmedValue = value.trim();
        if (trimmedValue && !formData.keywords.includes(trimmedValue) && formData.keywords.length < 7) {
            const newKeywords = [...formData.keywords, trimmedValue];
            updateFormData('keywords', newKeywords);
        }
    };

    const removeKeyword = (index: number): void => {
        const newKeywords = formData.keywords.filter((_, i) => i !== index);
        updateFormData('keywords', newKeywords);
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault();
        
        // Validate form with current data including keywords
        const { errors: validationErrors, isValid } = validateForm(formData);
        setErrors(validationErrors);
        
        if (!isValid) {
            console.log("Validation failed:", validationErrors);
            return;
        }

        setIsSubmitting(true);
        
        try {
            const response = await axios.post("/api/submit_form", {formData});
            // console.log(response);
            await new Promise(resolve => setTimeout(resolve, 2000));
            // console.log("Form submitted successfully:", formData);
            alert("Form submitted successfully!");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error submitting form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleKeywordKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === "Enter") {
            e.preventDefault();
            const input = e.target as HTMLInputElement;
            addKeyword(input.value);
            input.value = "";
        }
    };

    const handleInputChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        updateFormData(field, e.target.value);
    };

    const handleCheckboxChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>): void => {
        updateFormData(field, e.target.checked);
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 m-8 mt-0 rounded-2xl border border-blue-200">
            <div className="shadow-input w-full rounded-none p-4 md:rounded-2xl md:p-8">
                <div className="text-center mb-8">
                </div>

                <div className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <LabelInputContainer>
                            <LabelIcon>
                                <User size={20} />
                                <Label htmlFor="firstname">First name</Label>
                            </LabelIcon>
                            <Input
                                id="firstname"
                                placeholder="Enter first name"
                                type="text"
                                value={formData.firstname}
                                onChange={handleInputChange('firstname')}
                                className={errors.firstname ? 'border-red-500' : ''}
                            />
                            {errors.firstname && (
                                <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>
                            )}
                        </LabelInputContainer>
                        
                        <LabelInputContainer>
                            <LabelIcon>
                                <User size={20} />
                                <Label htmlFor="lastname">Last name</Label>
                            </LabelIcon>
                            <Input
                                id="lastname"
                                placeholder="Enter last name"
                                type="text"
                                value={formData.lastname}
                                onChange={handleInputChange('lastname')}
                                className={errors.lastname ? 'border-red-500' : ''}
                            />
                            {errors.lastname && (
                                <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>
                            )}
                        </LabelInputContainer>
                    </div>

                    {/* Email and Mobile */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <LabelInputContainer>
                            <LabelIcon>
                                <Mail size={20} />
                                <Label htmlFor="email">Email Address</Label>
                            </LabelIcon>
                            <Input
                                id="email"
                                placeholder="your@email.com"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange('email')}
                                className={errors.email ? 'border-red-500' : ''}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </LabelInputContainer>
                        
                        <LabelInputContainer>
                            <LabelIcon>
                                <Phone size={20} />
                                <Label htmlFor="mobile">Mobile Number</Label>
                            </LabelIcon>
                            <Input
                                id="mobile"
                                placeholder="+91 XXXXXXXXXX"
                                type="tel"
                                value={formData.mobile}
                                onChange={handleInputChange('mobile')}
                                className={errors.mobile ? 'border-red-500' : ''}
                            />
                            {errors.mobile && (
                                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                            )}
                        </LabelInputContainer>
                    </div>

                    {/* Institution */}
                    <LabelInputContainer>
                        <LabelIcon>
                            <Building2 size={20} />
                            <Label htmlFor="institution">Institution / Organization</Label>
                        </LabelIcon>
                        <Input
                            id="institution"
                            placeholder="Your university or organization"
                            type="text"
                            value={formData.institution}
                            onChange={handleInputChange('institution')}
                            className={errors.institution ? 'border-red-500' : ''}
                        />
                        {errors.institution && (
                            <p className="text-red-500 text-sm mt-1">{errors.institution}</p>
                        )}
                    </LabelInputContainer>

                    {/* Abstract */}
                    <LabelInputContainer>
                        <LabelIcon>
                            <FileText size={20} />
                            <Label htmlFor="abstract">Abstract / Description</Label>
                        </LabelIcon>
                        <Textarea
                            id="abstract"
                            placeholder="Describe your work, research, or interests"
                            value={formData.abstract}
                            onChange={handleInputChange('abstract')}
                            rows={4}
                            className={`resize-vertical ${errors.abstract ? 'border-red-500' : ''}`}
                        />
                        <div className="text-xs text-gray-500 mt-1">
                            {formData.abstract.length} characters (minimum 10 required)
                        </div>
                        {errors.abstract && (
                            <p className="text-red-500 text-sm mt-1">{errors.abstract}</p>
                        )}
                    </LabelInputContainer>

                    {/* Keywords - FIXED IMPLEMENTATION */}
                    <LabelInputContainer>
                        <LabelIcon>
                            <Tag size={18} />
                            <Label htmlFor="keywords">Keywords</Label>
                        </LabelIcon>
                        <Input
                            id="keywords"
                            placeholder="Add keyword and press Enter"
                            onKeyDown={handleKeywordKeyDown}
                            className={errors.keywords ? 'border-red-500' : ''}
                        />
                        
                        {/* Keywords Display */}
                        {formData.keywords.length > 0 && (
                            <div className="border rounded-md p-2 min-h-[40px] flex flex-wrap gap-2 bg-gray-50 mt-2">
                                {formData.keywords.map((keyword: string, index: number) => (
                                    <span
                                        key={index}
                                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm flex items-center gap-1 hover:bg-blue-200 transition-colors"
                                    >
                                        <Tag className="w-3 h-3" />
                                        {keyword}
                                        <X
                                            className="w-3 h-3 cursor-pointer hover:text-blue-600"
                                            onClick={() => removeKeyword(index)}
                                        />
                                    </span>
                                ))}
                            </div>
                        )}
                        
                        {/* Keywords Counter and Status */}
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>{formData.keywords.length}/7 keywords</span>
                            <span className={formData.keywords.length >= 3 ? 'text-green-600' : 'text-red-500'}>
                                {formData.keywords.length >= 3 
                                    ? '✓ Minimum reached' 
                                    : `Need ${3 - formData.keywords.length} more`}
                            </span>
                        </div>
                        
                        {errors.keywords && (
                            <p className="text-red-500 text-sm mt-1">{errors.keywords}</p>
                        )}
                    </LabelInputContainer>

                    {/* Checkboxes */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-3 pl-4">
                            <Checkbox
                                id="inperson"
                                checked={formData.inperson}
                                onChange={handleCheckboxChange('inperson')}
                            />
                            <Label htmlFor="inperson" className="flex items-center gap-2">
                                <UserCheck className="w-4 h-4 text-green-600" />
                                Willing to Come in Person
                            </Label>
                        </div>

                        <div className={`border rounded-lg p-3 transition-all ${formData.accept_terms ? 'border-blue-600 bg-blue-50' : 'border-gray-300'} ${errors.accept_terms ? 'border-red-500' : ''}`}>
                            <div className="flex items-start gap-3">
                                <Checkbox
                                    id="accept_terms"
                                    checked={formData.accept_terms}
                                    onChange={handleCheckboxChange('accept_terms')}
                                    required
                                />
                                <div className="flex-1">
                                    <Label htmlFor="accept_terms" className="flex items-center gap-2 font-medium">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        Accept terms and conditions
                                    </Label>
                                    <p className="text-sm text-gray-600 mt-1">
                                        I confirm that this work is original and has not been submitted elsewhere.
                                    </p>
                                </div>
                            </div>
                            {errors.accept_terms && (
                                <p className="text-red-500 text-sm mt-2">{errors.accept_terms}</p>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end mt-8">
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="px-6 py-3 rounded-md font-medium text-white bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    <Send className="w-4 h-4" />
                                    Submit Form
                                    <ChevronRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper Components with proper typing
const LabelInputContainer: React.FC<LabelInputContainerProps> = ({ children, className = "" }) => (
    <div className={`flex w-full flex-col space-y-2 ${className}`}>
        {children}
    </div>
);

const LabelIcon: React.FC<LabelIconProps> = ({ children, className = "" }) => (
    <div className={`flex items-center gap-2 ml-2 ${className}`}>
        {children}
    </div>
);

export default AbstractForm;