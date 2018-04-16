import ReadFile from './ReadFile'

export default ReadFile

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('vue-read-file', ReadFile)
}