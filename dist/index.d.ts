declare type PROJECT_GQL_CONFIG = {
    manager: Boolean;
    provider: Boolean;
    resident: Boolean;
    web: Boolean;
    mobile: Boolean;
};
export declare class ConditionalField {
    static projectConfig: PROJECT_GQL_CONFIG;
    static init(projectConfig: PROJECT_GQL_CONFIG): void;
    static cf(base: Array<string>, ...variables: Array<string | Function>): string;
}
export {};
