(function () {
    var demo, fixedTable;
    fixedTable = function (el) {
        let body, header, sidebar, sidebar_right, footer;
        body = $(el).find('.fixedTable-body');
        sidebar = $(el).find('.fixedTable-sidebar table');
        sidebar_right = $(el).find('.fixedTable-sidebar-right table');
        header = $(el).find('.fixedTable-header table');
        footer = $(el).find('.fixedTable-footer table');
        return $(body).scroll(function () {
            //滚动条绑定，对指定样式进行绑定，绑定后拖动滚动条时联动滑动
            $(sidebar).css('margin-top', -$(body).scrollTop());//绑定纵向滚动条
            $(sidebar_right).css('margin-top', -$(body).scrollTop());//绑定纵向滚动条
            $(footer).css('margin-left', -$(body).scrollLeft());//绑定横向滚动条
            return $(header).css('margin-left', -$(body).scrollLeft());//绑定横向滚动条
        });
    };

    demo = new fixedTable($('#demo'));

}).call(this);