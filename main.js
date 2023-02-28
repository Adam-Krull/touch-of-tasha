define([
    'base/js/namespace',
    'base/js/events'
    ], function(Jupyter, events) {
        
        var takeaway_cell = function() {
        Jupyter.notebook.insert_cell_below('markdown').
        set_text(`<div class=\"alert alert-block alert-success\">
                 <b>Takeaways:</b>
                 <br>
                 - Begin documenting takeaways here.
                 <br>
                 - Second takeaway.
                 <br>
                 - Third takeaway.
                 `);
        };
    
        var takeawayCellButton = function() {
            Jupyter.toolbar.add_buttons_group([
                Jupyter.keyboard_manager.actions.register ({
                    'help': 'Add takeaway cell',
                    'icon': 'fa-lightbulb-o',
                    'handler': takeaway_cell
                }, 'add-takeaway-cell', 'Takeaway cell')
            ])
        }
        
        var note_cell = function() {
        Jupyter.notebook.insert_cell_below('markdown').
        set_text(`<div class=\"alert alert-block alert-info\">
                 <b>Instructor Note:</b>
                 <br>
                 Instructor note goes here.
                 `);
        };
    
        var noteCellButton = function() {
            Jupyter.toolbar.add_buttons_group([
                Jupyter.keyboard_manager.actions.register ({
                    'help': 'Add note cell',
                    'icon': 'fa-sticky-note-o',
                    'handler': note_cell
                }, 'add_note_cell', 'Note cell')
            ])
        }
        
        var important_cell = function() {
        Jupyter.notebook.insert_cell_below('markdown').
        set_text(`<div class=\"alert alert-danger\" role=\"alert\">
                 <strong>Important:</strong>
                 <br>
                 Import message goes here.
                 `);
        };
    
        var importantCellButton = function() {
            Jupyter.toolbar.add_buttons_group([
                Jupyter.keyboard_manager.actions.register ({
                    'help': 'Add important cell',
                    'icon': 'fa-exclamation-triangle',
                    'handler': important_cell
                }, 'add_important_cell', 'Important cell')
            ])
        }    
        
        function load_ipython_extension() {
            takeawayCellButton();
            noteCellButton();
            importantCellButton();
        }
        return {
            load_ipython_extension: load_ipython_extension
        };
    });