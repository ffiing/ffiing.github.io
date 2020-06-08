// 
console.log('脚本生效了234243')

 var height1 = window.screen.height;
                var availHeight = screen.availHeight;
                var width1 = screen.width;
                var availWidth = screen.availWidth;
                
                var str1 = 'height1=' + height1 + 'width1=' + width1 + 'availHeight=' + availHeight + 'availWidth=' + availWidth;

                var innerHeight = window.innerHeight;
                var outerHeight = window.outerHeight;
                var innerWidth = window.innerWidth;
                var outerWidth = window.outerWidth;
                
                var str2 = 'innerHeight='+innerHeight + 'innerWidth='+innerWidth+'outerHeight='+outerHeight+'outerWidth='+outerWidth;
                alert(str1 +'\n\r' + str2 +'\n\r' + window.orientation )
 
