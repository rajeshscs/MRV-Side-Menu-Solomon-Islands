$(document).ready(function() {
	var menulist=[]
     frappe.call({
            method: "frappe_side_menu.frappe_side_menu.api.get_menulist",
            args: {
            },
            async:false,
            callback: function(r) {
               menulist.push(r.message.menu);
               let roles = '';
			    if ($.inArray('System Manager', frappe.user_roles) != -1)
			        roles = 'Admin'
			    else if ($.inArray('Super Admin', frappe.user_roles) != -1)
			        roles = 'Admin'
			    else if ($.inArray('Vendor', frappe.user_roles) != -1)
			        roles = 'Vendor'
			    else if ($.inArray('Admin', frappe.user_roles) != -1)
			        roles = 'Admin'    
			    else
			        roles = '';
			    $('body').prepend(r.message.template_html);
	         }
        });
	
});

function go_to_page(e) {
    let url = $(e).attr('id');
     frappe.set_route(url)
 }

function gotodashboard(e){
	frappe.set_route("")
}