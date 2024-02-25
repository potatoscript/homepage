function PotatoScript() {
    // Constructor function, if needed
}

PotatoScript.prototype = {
    uploadFiles: function () {
        var fileInput = document.getElementById('id_upload_file');
    
        // Check if a file is selected
        if (fileInput.files.length === 0) {
            alert('ファイルが選択されていません。');
            return;  // Do not proceed further
        }
    
        document.getElementById('uploadForm').submit();  // Submit the form
        alert('ファイルが正常にアップロードされました。');  // Display JavaScript alert
    },

    ajaxRequest: function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        // Set the Content-Type header if needed
        xhr.setRequestHeader('Content-Type', 'text/html; charset=UTF-8');

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                callback(data);
            }
        };

        xhr.send();
    },

    // Close the popup when clicking the close button or the X button
    closeModal: function() {
        $('#popupModal').modal('hide');
        // Re-enable auto-reload after closing the modal
        this.isPopupOpen = false;
    },
    createPopupModal: function () {
        // Create modal element
        var modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.id = 'popupModal';
        modal.tabIndex = '-1';
        modal.role = 'dialog';
        modal.setAttribute('aria-labelledby', 'popupModalLabel');
        modal.setAttribute('aria-hidden', 'true');

        // Create modal dialog
        var modalDialog = document.createElement('div');
        modalDialog.className = 'modal-dialog';
        modalDialog.role = 'document';

        // Create modal content
        var modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        // Create modal header
        var modalHeader = document.createElement('div');
        modalHeader.className = 'modal-header';

        // Create modal title
        var modalTitle = document.createElement('h5');
        modalTitle.className = 'modal-title';
        modalTitle.id = 'popupModalLabel';
        modalTitle.innerText = 'データ';

        // Create close button
        var closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.className = 'close';
        closeButton.setAttribute('aria-label', 'Close');
        closeButton.onclick = this.closeModal;
        closeButton.innerHTML = '<span aria-hidden="true">&times;</span>';

        // Append title and close button to header
        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(closeButton);

        // Create modal body
        var modalBody = document.createElement('div');
        modalBody.className = 'modal-body';
        modalBody.style.color = 'black';

        // Create paragraph for data
        var popupData = document.createElement('p');
        popupData.id = 'popupData';

        // Append data paragraph to modal body
        modalBody.appendChild(popupData);

        // Create modal footer
        var modalFooter = document.createElement('div');
        modalFooter.className = 'modal-footer';

        // Create close button for footer
        var closeButtonFooter = document.createElement('button');
        closeButtonFooter.type = 'button';
        closeButtonFooter.className = 'btn btn-secondary';
        closeButtonFooter.onclick = this.closeModal;
        closeButtonFooter.innerText = 'Close';

        // Append close button to footer
        modalFooter.appendChild(closeButtonFooter);

        // Append header, body, and footer to content
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);

        // Append content to dialog
        modalDialog.appendChild(modalContent);

        // Append dialog to modal
        modal.appendChild(modalDialog);

        // Append modal to body
        document.body.appendChild(modal);
    }
};