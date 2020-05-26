import { getRenderer } from 'D:/Caute/Documents/GitHub/Fictitious-Rotor/oc-guide/.codedoc/node_modules/@codedoc/core/dist/es5/transport/renderer.js';
import { initJssCs } from 'D:/Caute/Documents/GitHub/Fictitious-Rotor/oc-guide/.codedoc/node_modules/@codedoc/core/dist/es5/transport/setup-jss.js';initJssCs();
import { installTheme } from 'D:/Caute/Documents/GitHub/Fictitious-Rotor/oc-guide/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from 'D:/Caute/Documents/GitHub/Fictitious-Rotor/oc-guide/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from 'D:/Caute/Documents/GitHub/Fictitious-Rotor/oc-guide/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from 'D:/Caute/Documents/GitHub/Fictitious-Rotor/oc-guide/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from 'D:/Caute/Documents/GitHub/Fictitious-Rotor/oc-guide/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from 'D:/Caute/Documents/GitHub/Fictitious-Rotor/oc-guide/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from 'D:/Caute/Documents/GitHub/Fictitious-Rotor/oc-guide/.codedoc/node_modules/@codedoc/core/dist/es5/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from 'D:/Caute/Documents/GitHub/Fictitious-Rotor/oc-guide/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from 'D:/Caute/Documents/GitHub/Fictitious-Rotor/oc-guide/.codedoc/node_modules/@codedoc/core/dist/es5/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from 'D:/Caute/Documents/GitHub/Fictitious-Rotor/oc-guide/.codedoc/node_modules/@codedoc/core/dist/es5/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from 'D:/Caute/Documents/GitHub/Fictitious-Rotor/oc-guide/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from 'D:/Caute/Documents/GitHub/Fictitious-Rotor/oc-guide/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/search/post-nav/index.js';postNavSearch();
import { ToCPrevNext } from 'D:/Caute/Documents/GitHub/Fictitious-Rotor/oc-guide/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/prevnext/index.js';
import { ToCToggle } from 'D:/Caute/Documents/GitHub/Fictitious-Rotor/oc-guide/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from 'D:/Caute/Documents/GitHub/Fictitious-Rotor/oc-guide/.codedoc/node_modules/@codedoc/core/dist/es5/components/darkmode/index.js';
import { ConfigTransport } from 'D:/Caute/Documents/GitHub/Fictitious-Rotor/oc-guide/.codedoc/node_modules/@codedoc/core/dist/es5/transport/config.js';
import { TabSelector } from 'D:/Caute/Documents/GitHub/Fictitious-Rotor/oc-guide/.codedoc/node_modules/@codedoc/core/dist/es5/components/tabs/selector.js';
import { CollapseControl } from 'D:/Caute/Documents/GitHub/Fictitious-Rotor/oc-guide/.codedoc/node_modules/@codedoc/core/dist/es5/components/collapse/collapse-control.js';

const components = {
  'qCFFsX0Fw+xx6pnH34s6MA==': ToCPrevNext,
  'fjKNXhCbqJ+3KjYOEA1F4Q==': ToCToggle,
  'Ivzka32K8i6GFUe7P6TwaQ==': DarkModeSwitch,
  'ehSEZ2ECBijvOkWUKOMImw==': ConfigTransport,
  'uiFWYzQnKtZQQHsz359zbw==': TabSelector,
  'Micszb/ikg/7mXPkaw0GiA==': CollapseControl
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
