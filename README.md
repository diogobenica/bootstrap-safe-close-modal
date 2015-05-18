# bootstrap-safe-close-modal
Confirmation for Bootstrap modal close

## How to use
Add the minified script after jQuery and Bootstrap scripts.

`<script src="bootstrap-safe-close-modal.min.js" />`

If you are using RequireJS or need an AMD compatible module, you can add the minified AMD version:

`<script src="bootstrap-safe-close-modal.amd.min.js" />`

Then, just add a `data-safe-close` attribute to the root modal element:

```
<div class="modal fade" data-safe-close="true">
  <div class="modal-dialog modal-lg">
    <form class="modal-content">
      <!-- Content -->
    </form>
  </div>
</div>
```

The plugin has a default message when user try to close modal (by clicking close button or in the gray backdrop behind):

`If you close this window, all information will be lost. Do you want to close?`

If you want to change that message, you need to add the `data-safe-close-message` attribute to the root modal element with the message:

```
<div class="modal fade" data-safe-close="true" data-safe-close-message="Do you really wanna close?">
  <!-- Content -->
</div>
```
