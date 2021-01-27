import { FunctionProperty } from "../../frida_helper";

interface BundleWrapper {
    get: FunctionProperty<BundleWrapper>
}