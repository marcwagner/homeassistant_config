if (window.location.href.indexOf('kiosk') > 0) {
    setTimeout(function () {
        try {
            console.log("entering kiosk mode")
            const drawer_layout = document
                    .querySelector('home-assistant').shadowRoot
                    .querySelector('home-assistant-main').shadowRoot
                    .querySelector('app-drawer-layout');
            const huiroot = drawer_layout
                    .querySelector('partial-panel-resolver')
                    .querySelector('ha-panel-lovelace').shadowRoot
                    .querySelector('hui-root').shadowRoot;
            const header = huiroot.querySelector('app-header');
            const toolbar = huiroot.querySelector('app-toolbar');
            const button_menu = toolbar.querySelector('ha-menu-button').shadowRoot;
            const app_drawer = drawer_layout.querySelector('app-drawer');
            if (window.location.href.indexOf('show_tabs') > 0) {
                toolbar.style.display = 'none';
            } else {
                header.style.display = 'none';
            }
            if(app_drawer.hasAttribute("opened")){
                button_menu.querySelector('paper-icon-button').click();
            }
            const app_layout = huiroot.querySelector('ha-app-layout').querySelector('#view')
            app_layout.style.minHeight = '50vh';
            window.dispatchEvent(new Event('resize'));
        }
        catch (e) {
            console.log(e);
        }
    }, 200);
}
