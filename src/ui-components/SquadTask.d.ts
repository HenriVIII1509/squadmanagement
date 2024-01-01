/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SquadTaskInputValues = {
    Field0?: string;
    Field1?: string;
    Field2?: string;
};
export declare type SquadTaskValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field2?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SquadTaskOverridesProps = {
    SquadTaskGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Field2?: PrimitiveOverrideProps<StorageManagerProps>;
} & EscapeHatchProps;
export declare type SquadTaskProps = React.PropsWithChildren<{
    overrides?: SquadTaskOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SquadTaskInputValues) => SquadTaskInputValues;
    onSuccess?: (fields: SquadTaskInputValues) => void;
    onError?: (fields: SquadTaskInputValues, errorMessage: string) => void;
    onChange?: (fields: SquadTaskInputValues) => SquadTaskInputValues;
    onValidate?: SquadTaskValidationValues;
} & React.CSSProperties>;
export default function SquadTask(props: SquadTaskProps): React.ReactElement;
