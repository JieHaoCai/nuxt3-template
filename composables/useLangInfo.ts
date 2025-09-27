export const useLangInfo = () => {
    const {  locales,locale,getBrowserLocale } = useI18n()
     // 获取浏览器语言
    const browserLanguage = getBrowserLocale() || "en";
     let selLangInfo = {
        "en": {
            "message": "We noticed your browser is set to English. Would you like to switch to the English version of our site?",
            "confirmButton": "Switch to English",
            "cancelButton": "Keep Current Language",
        },
        "zh-CN": {
            "message": "我们发现您的浏览器语言是中文，是否切换到中文版本？",
            "confirmButton": "切换到中文",
            "cancelButton": "保持当前语言",
        },
        "ja":{
            "message": "お使いのブラウザの言語が日本語であることを検出しました。ウェブサイトを日本語版に切り替えますか？",
            "confirmButton": "日本語に切り替える",
            "cancelButton": "現在の言語を維持する",
        },
        "ko": {
            "message": "귀하의 브라우저가 영어로 설정된 것을 확인했습니다. 저희 웹사이트를 영어 버전으로 전환하시겠습니까?",
            "confirmButton": "영어로 전환",
            "cancelButton": "현재 언어 유지"
        },
        "fr": {
            "message": "Nous avons remarqué que votre navigateur est réglé sur l'anglais. Souhaitez-vous passer à la version anglaise de notre site?",
            "confirmButton": "Passer en anglais",
            "cancelButton": "Conserver la langue actuelle"
        },
        "de": {
            "message": "Wir haben festgestellt, dass Ihr Browser auf Englisch eingestellt ist. Möchten Sie zur englischen Version unserer Website wechseln?",
            "confirmButton": "Zur englischen Version wechseln",
            "cancelButton": "Aktuelle Sprache beibehalten"
        },
        "it": {
            "message": "Abbiamo notato che il tuo browser è impostato su inglese. Vuoi passare alla versione inglese del nostro sito?",
            "confirmButton": "Passa all'inglese",
            "cancelButton": "Mantieni la lingua attuale"
        },
        "es": {
            "message": "Hemos notado que su navegador está configurado en inglés. ¿Le gustaría cambiar a la versión en inglés de nuestro sitio?",
            "confirmButton": "Cambiar a inglés",
            "cancelButton": "Mantener el idioma actual"
        },
        "tr": {
            "message": "Tarayıcınızın İngilizce olarak ayarlandığını fark ettik. Sitemizin İngilizce sürümüne geçmek ister misiniz?",
            "confirmButton": "İngilizce'ye Geç",
            "cancelButton": "Mevcut Dili Koru"
        },
        "vi": {
            "message": "Chúng tôi nhận thấy trình duyệt của bạn được đặt thành tiếng Anh. Bạn có muốn chuyển sang phiên bản tiếng Anh của trang web không?",
            "confirmButton": "Chuyển sang tiếng Anh",
            "cancelButton": "Giữ nguyên ngôn ngữ hiện tại"
        },
        "ar": {
            "message": "لقد لاحظنا أن إعدادات متصفحك مضبوطة على اللغة الإنجليزية. هل ترغب في التبديل إلى النسخة الإنجليزية من موقعنا؟",
            "confirmButton": "التبديل إلى الإنجليزية",
            "cancelButton": "الاحتفاظ باللغة الحالية"
        }
    }
    const supportedLocales = locales.value.map(locale => locale.code)
    
    const browserLanguageLocale = locales.value.find(locale => locale.code === browserLanguage) || locales.value[0]


    //对阿拉伯语言特殊处理
    const setHtmlDIR = () => {
        const htmlElement = document.querySelector("html");
        if(htmlElement){
            htmlElement.setAttribute("dir",  locale.value === "ar" ? "rtl" : "ltr");
        }
    }

    return { LangInfo: selLangInfo[browserLanguage as keyof typeof selLangInfo] || selLangInfo["en"], browserLanguage, supportedLocales ,browserLanguageLocale,setHtmlDIR}
}