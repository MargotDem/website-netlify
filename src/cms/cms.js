import CMS from "netlify-cms-app";

import { ContentTypesWidget } from "./ContentTypesWidget";
import { HiddenDateControl } from "./HiddenDateControl";

CMS.registerWidget("contentTypesWidget", ContentTypesWidget);
CMS.registerWidget("hiddenDate", HiddenDateControl);
