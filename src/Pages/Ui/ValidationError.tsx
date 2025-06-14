import React from 'react'

interface ValidationErrorProps {
    errors: any
    touched: any
    name: any
}

const ValidationError: React.FC<ValidationErrorProps> = ({
    errors,
    touched,
    name
}) => {
    return (
        errors && touched && errors[name] && touched[name] ? (
            <div
                className="mt-1 text-danger validation-error w-[280px]"
                style={{ fontSize: "14px", fontWeight: "400", color: "red" }}
            >
                {typeof errors[name] === "string" ? errors[name] : null}
            </div>
        ) : null

    )
}

export default ValidationError