import CMS from "netlify-cms-app";

import { ContentTypesControl } from "./ContentTypesControl";
import { HiddenDateControl } from "./HiddenDateControl";

CMS.registerWidget("contentTypesWidget", ContentTypesControl);
CMS.registerWidget("hiddenDate", HiddenDateControl);
