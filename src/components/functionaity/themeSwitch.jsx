

export default function themeSwitch() {
    var listGridTheme = document.getElementById('searchBtnsId');
    var SearchTheme = document.getElementById('searchBarId');
    var navTheme = document.getElementById('navId');
    var appTheme = document.getElementById('appId');
    var contentTheme = document.getElementById('contentPanelId');
    var uploadTheme = document.getElementById('uploadBtnId');
    var navMobileTheme = document.getElementById('navMobileId')
    
    


    navTheme.classList.toggle("navbarDark");
    SearchTheme.classList.toggle("searchBarDark");
    listGridTheme.classList.toggle("searchBtnsDark");
    appTheme.classList.toggle("appDark");
    contentTheme.classList.toggle("contentPanelDark");
    uploadTheme.classList.toggle("uploadBtnDark");
    navMobileTheme.classList.toggle("navMobileDark")
    
    
}

    

    