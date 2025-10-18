<script setup>
import { Highlight } from '@tiptap/extension-highlight'
import { TextAlign } from '@tiptap/extension-text-align'
import { StarterKit } from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  editable: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const editor = ref()

watch(
  () => props.modelValue,
  (value) => {
    const isSame = editor.value.getHTML() === value
    if (!isSame)
      editor.value.commands.setContent(value, false)
  },
)

onMounted(() => {
  editor.value = new Editor({
    content: props.modelValue,
    editable: props.editable,
    editorProps: {
      attributes: {
        class: '',
      },
    },
    extensions: [StarterKit, Highlight, TextAlign.configure({ types: ['heading', 'paragraph'] })],
    onUpdate: () => {
      emit('update:modelValue', editor.value?.getHTML())
    },
  })
})

onBeforeUnmount(() => {
  editor.value?.destroy()
  editor.value = null
})
</script>

<template>
  <div v-if="editor">
    <Toolbar id="toolbar">
      <template #start>
        <Button
          id="bold"
          size="small"
          label="B"
          :class="{ 'p-button-outlined': !editor.isActive('bold') }"
          @click="editor.chain().focus().toggleBold().run()"
        />
        <Button
          id="italic"
          size="small"
          label="I"
          :class="{ 'p-button-outlined': !editor.isActive('italic') }"
          @click="editor.chain().focus().toggleItalic().run()"
        />
        <Button
          id="strike"
          size="small"
          label="T"
          :class="{ 'p-button-outlined': !editor.isActive('strike') }"
          @click="editor.chain().focus().toggleStrike().run()"
        />
        <Button
          size="small"
          label="Clear"
          class="p-button-outlined"
          @click="editor.chain().focus().unsetAllMarks().run()"
        />
        <span class="separator" />
        <Button
          size="small"
          label="P"
          :class="{ 'p-button-outlined': !editor.isActive('paragraph') }"
          @click="editor.chain().focus().setParagraph().run()"
        />
        <Button
          size="small"
          label="H1"
          :class="{ 'p-button-outlined': !editor.isActive('heading', { level: 1 }) }"
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        />
        <Button
          size="small"
          label="H2"
          :class="{ 'p-button-outlined': !editor.isActive('heading', { level: 2 }) }"
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        />
        <Button
          size="small"
          label="H3"
          :class="{ 'p-button-outlined': !editor.isActive('heading', { level: 3 }) }"
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        />
        <Button
          size="small"
          label="H4"
          :class="{ 'p-button-outlined': !editor.isActive('heading', { level: 4 }) }"
          @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        />
        <Button
          size="small"
          label="H5"
          :class="{ 'p-button-outlined': !editor.isActive('heading', { level: 5 }) }"
          @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        />
        <Button
          size="small"
          label="H6"
          :class="{ 'p-button-outlined': !editor.isActive('heading', { level: 6 }) }"
          @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
        />
      </template>
      <template #center>
        <Button
          size="small"
          icon="pi pi-list"
          icon-only
          :class="{ 'p-button-outlined': !editor.isActive('bulletList') }"
          @click="editor.chain().focus().toggleBulletList().run()"
        />
        <Button
          size="small"
          icon="pi pi-code"
          icon-only
          :class="{ 'p-button-outlined': !editor.isActive('codeBlock') }"
          @click="editor.chain().focus().toggleCodeBlock().run()"
        />
        <Button
          size="small"
          icon="pi pi-minus"
          icon-only
          class="p-button-outlined"
          @click="editor.chain().focus().setHorizontalRule().run()"
        />
        <Button
          size="small"
          icon="pi pi-bolt"
          icon-only
          :class="{ 'p-button-outlined': !editor.isActive('highlight') }"
          @click="editor.chain().focus().toggleHighlight().run()"
        />
        <Button
          size="small"
          label="Quote"
          :class="{ 'p-button-outlined': !editor.isActive('blockquote') }"
          @click="editor.chain().focus().toggleBlockquote().run()"
        />
        <span class="separator" />
        <Button
          size="small"
          icon="pi pi-align-left"
          icon-only
          :class="{ 'p-button-outlined': !editor.isActive({ textAlign: 'left' }) }"
          @click="editor.chain().focus().setTextAlign('left').run()"
        />
        <Button
          size="small"
          icon="pi pi-align-center"
          icon-only
          :class="{ 'p-button-outlined': !editor.isActive({ textAlign: 'center' }) }"
          @click="editor.chain().focus().setTextAlign('center').run()"
        />
        <Button
          size="small"
          icon="pi pi-align-right"
          icon-only
          :class="{ 'p-button-outlined': !editor.isActive({ textAlign: 'right' }) }"
          @click="editor.chain().focus().setTextAlign('right').run()"
        />
        <Button
          size="small"
          icon="pi pi-align-justify"
          icon-only
          :class="{ 'p-button-outlined': !editor.isActive({ textAlign: 'justify' }) }"
          @click="editor.chain().focus().setTextAlign('justify').run()"
        />
      </template>

      <template #end>
        <Button
          size="small"
          severity="secondary"
          label="Undo"
          :disabled="!editor.can().chain().focus().undo().run()"
          @click="editor.chain().focus().undo().run()"
        />
        <Button
          size="small"
          severity="secondary"
          label="Redo"
          :disabled="!editor.can().chain().focus().redo().run()"
          @click="editor.chain().focus().redo().run()"
        />
      </template>
    </Toolbar>
    <EditorContent :editor="editor" class="p-inputtext p-tiptap" />
  </div>
</template>

<style scoped lang="scss">
.separator {
  content: '';
  margin-right: 0.5rem;
}

#toolbar {
  padding: 0.5rem;
  border-bottom: none;
  button {
    margin-right: 0.25rem;
    font-weight: bold;
  }
  .p-colorpicker {
    margin-right: 0.25rem;
  }
  .p-button.p-button-sm {
    padding: 0.4375rem 0.4375rem;
  }
}

.p-tiptap :focus {
  outline-offset: 2px;
  outline: 2px solid transparent;
}
#bold {
  font-weight: 900;
}

#italic {
  font-style: italic;
}

#strike {
  text-decoration: line-through;
}
</style>
