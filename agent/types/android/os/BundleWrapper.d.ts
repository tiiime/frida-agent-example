import { FunctionProperty } from "../../frida_hook";

interface BundleWrapper {
    get: FunctionProperty<BundleWrapper>
}