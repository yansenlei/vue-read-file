<template>
    <div class="upload-file-box" :class="{center:position==='center'}">
        <a href="javascript:;" class="form-group file">{{ getFileName() }}
                <input id="molImg" ref="molImg" type="file" class="form-control" name="avatar" style="display:blcok" @change="uploadFunc" :accept="accept"/>
            </a>
    </div>
</template>

<script>
    export default {
        name: 'ReadFile',
        data() {
            return {
                fileName: '',
                fileContent: ''
            }
        },
        props: {
            value: {
                default: '',
            },
            position: {
                type: String,
                default: 'left',
            },
            accept: {
                type: String,
                default: ''
            }
        },
        methods: {
            uploadFunc(e) {
                var self = this
                let file = e.target.files[0]
                this.fileName = file.name
                var reader = new FileReader()
                reader.onload = (e) => {
                    this.$emit('input', reader.result)
                }
                reader.readAsText(file)
            },
            getFileName() {
                return this.fileContent ? (this.fileName || '重新上传') : '上传'
            }
        },
        mounted() {
            this.fileContent = this.value
        },
        watch: {
            value(value) {
                this.fileContent = value
            },
            fileContent(value) {
                this.value = value
            }
        },
    }
</script>

<style scoped>
    .file {
        font-size: 12px;
        position: relative;
        display: inline-block;
        overflow: hidden;
        color: #1E88C7;
        text-decoration: none;
        text-indent: 0;
        line-height: 20px;
    }
    
    .file input {
        position: absolute;
        font-size: 100px;
        right: 0;
        top: 0;
        opacity: 0;
    }
    
    .file:hover {
        color: #004974;
        text-decoration: none;
    }
    
    .upload-file-box {
        display: flex;
        align-items: center;
    }
    
    .upload-file-box.center {
        justify-content: center;
    }
    
    .form-group {
        line-height: 35px;
    }
</style>