import { Component } from '@angular/core';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss']
})
export class QuillEditorComponent {
  // editorContent: string = ''; // Store the editor content
  // savedContent: string | null = null; // Simulate saving content to a backend

  // // Save content as a stringified HTML
  // saveContent(): void {
  //   this.savedContent = JSON.stringify(this.editorContent);
  //   console.log('Saved Content:', this.savedContent);
  // }

  // // Load content and parse it back into the editor
  // loadContent(): void {
  //   if (this.savedContent) {
  //     this.editorContent = JSON.parse(this.savedContent);
  //     console.log('Loaded Content:', this.editorContent);
  //   }
  // }
}
