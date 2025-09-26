
import en from "./locales/en.json";
import zh from "./locales/zh.json";
import ar from "./locales/ar.json";
import de from "./locales/de.json";
import fr from "./locales/fr.json";
import ja from "./locales/ja.json";
import es from "./locales/es.json";

import tr from "./locales/tr.json";
import it from "./locales/it.json";
import vi from "./locales/vi.json";
import ko from "./locales/ko.json";

export default defineI18nConfig(() => {
  return {
    legacy:false,
    fallbackLocale: "en",
    messages: {
        en,
        ar,
        de,
        fr,
        ja,
        es,
        "zh-CN": zh,
        it,
        tr,
        vi,
        ko,
        // 添加其他语言翻译文件
      },
  }
})