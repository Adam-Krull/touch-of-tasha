define([
    'base/js/namespace',
    'base/js/events'
    ], function(Jupyter, events) {
        
        var add_cell = function() {
        Jupyter.notebook.insert_cell_below('markdown').
        set_text(`<div class=\"alert alert-block alert-success\">
                 <b>Takeaways</b>:
                 <br>
                 <br>
                 - Begin documenting takeaways here.
                 `);
        };
    
        var takeawayCellButton = function() {
            Jupyter.toolbar.add_buttons_group([
                Jupyter.keyboard_manager.actions.register ({
                    'help': 'Add takeaway cell',
                    'icon': 'fa-lightbulb-o',
                    'handler': add_cell
                }, 'add-takeaway-cell', 'Takeaway cell')
            ])
        }
        
        function load_ipython_extension() {
            takeawayCellButton();
        }
        return {
            load_ipython_extension: load_ipython_extension
        };
    });