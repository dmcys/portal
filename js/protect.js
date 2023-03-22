    document.addEventListener('keydown', function(e) {
        // Block Ctrl+S shortcut
        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
            e.preventDefault();
        }
    });

    document.addEventListener('keydown', function(e) {
        // Block Ctrl+A and Ctrl+W shortcuts
        if ((e.keyCode == 65 || e.keyCode == 87) && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
            e.preventDefault();
        }
    });

    document.addEventListener('contextmenu', function(e) {
        // Block ability to select all
        e.preventDefault();
    });
