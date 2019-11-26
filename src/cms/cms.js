import CMS from "netlify-cms-app";

import {NewWidgetControl} from "./NewWidgetControl";
import {HiddenDateControl} from "./HiddenDateControl";

CMS.registerWidget('newWidget', NewWidgetControl);
CMS.registerWidget('hiddenDate', HiddenDateControl);
