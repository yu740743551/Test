export default {
    SET_LANGUAGE: (state, language) => {
        state.language = language
        localStorage.setItem('language', language);
    }
}