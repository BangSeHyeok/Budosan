var Counsel = function(){
    /* 처리 페이지 주소 */
    if(GNB_PROCESS == null || GNB_PROCESS == undefined) {
        var GNB_PROCESS = "/drm";
    }
    var process = GNB_PROCESS + "/process/counsel/counsel_manager.php";
    if(_GLB_POSITION == 'admin'){
        var returnPage = GNB_PROCESS + "/index.php";		// 로그인후 이동할 페이지 주소
    }else{
        var returnPage = "/";		// 로그인후 이동할 페이지 주소
    }

    var chkId = false;
    return {
        regCampaign: function(){
            try{
                if(event_end == true){
                    alert('이벤트가 마감되었습니다.');
                    return;
                }
            }catch(e){}
            var frm = document._zz_write_F;
            if($("#word").val() == ""){
                alert('정답을 입력해주세요.');
                $("#word").focus();
                return;
            }
            if($("#word").val().length != 4){
                alert('정답을 4자리로 입력해주세요.');
                $("#word").focus();
                return;
            }
            $("#answer").val($("#word").val());
            if(!chkInputType(frm,'area','지역을',1,'')) return ;
            if(!chkInputType(frm,'age','연령대를',1,'')) return ;
            if(!chkInputType(frm,'name','성명을',0,'')) return ;
            if(!chkInputType(frm,'hp1','전화번호를',0,'')) return ;
            if(!chkInputType(frm,'hp2','전화번호를',0,'')) return ;
            if(!chkInputType(frm,'hp3','전화번호를',0,'')) return ;

            if(!frm.agree.checked && !frm.agree.checked){
                alert('개인정보 취급방침에 동의하셔야 신청이 가능합니다.');
                frm.agree.focus();
                return;
            }
            if(!confirm('신청 하시겠습니까?')) return;
            var param = $("#_zz_write_F").serialize();
            $.ajax({
                type: "POST",
                url: process,
                dataType:"json",
                data:param,
                success:function(data){
                    var result = data.result;
                    if(result == 'ok'){
                        alert('정상적으로 등록되었습니다.');
                        frm.reset();
                    }else if(result == 'same'){
                        alert('이미 이벤트에 가입하셨습니다.');
                        return;
                    }else{
                        alert('처리중 오류가 발생했습니다.');
                        return;
                    }
                },
                error:function(xhr){
                    alert('처리중 오류가 발생했습니다.');
                    return false;
                }
            });
        },
        reg: function(flag){

            
						if(flag == 'mt'){
							var frm = document._zzWriteF;
							if(!frm.agree[0].checked){
									alert('개인정보 취급방침에 동의하셔야 신청이 가능합니다.');
									frm.agree[0].focus();
									return;
							}

							if(!chkInputType(frm,'name',' 이름을',0,'')) return ;
							if(!chkInputType(frm,'hp','연락처를',0,'')) return ;

							var param = $("#_zzWriteF").serialize();
						}else if(flag == 'main'){
							var frm = document._zzWriteMainF;
							if(!frm.agree.checked){
									alert('개인정보 취급방침에 동의하셔야 신청이 가능합니다.');
									frm.agree.focus();
									return;
							}

							if(!chkInputType(frm,'name',' 이름을',0,'')) return ;
							if(!chkInputType(frm,'hp','연락처를',0,'')) return ;

							var param = $("#_zzWriteMainF").serialize();
						}else if(flag == 'bt'){
							var frm = document._zzWriteBottomF;
							if(!frm.privacy.checked){
									alert('개인정보 취급방침에 동의하셔야 신청이 가능합니다.');
									frm.agree.focus();
									return;
							}

							if(!chkInputType(frm,'name',' 이름을',0,'')) return ;
							if(!chkInputType(frm,'hp','연락처를',0,'')) return ;

							var param = $("#_zzWriteBottomF").serialize();
						}else{
							var frm = document._zzWriteF;
							if(!chkInputType(frm,'name',' 이름을',0,'')) return ;
							if(!chkInputType(frm,'hp','연락처를',0,'')) return ;

							if(!frm.privacy.checked){
									alert('개인정보 취급방침에 동의하셔야 신청이 가능합니다.');
									frm.agree.focus();
									return;
							}
							if(!frm.privacy2.checked){
									alert('개인정보 처리업무 위탁에 동의하셔야 신청이 가능합니다.');
									return;
							}
							var param = $("#_zzWriteF").serialize();
						}
						

            if(1){

                $.ajax({
                    type: "POST",
                    url: process,
                    dataType:"json",
                    data:"mode=reg&" + param,
                    success:function(data){
                        var result = data.result;
                        var rurl = data.returnURL;
                        if(result == 'ok'){
                            alert('정상적으로 등록되었습니다.');
                            frm.reset();
                        }else{
                            alert('처리중 오류가 발생했습니다.');
                            return;
                        }
                    },
                    error:function(xhr){
                        alert('처리중 오류가 발생했습니다.');
                        return false;
                    }
                });
            }
        },
        mod: function(){
            var frm = document._zzWriteF;
            var param = $("#_zzWriteF").serialize();

            $.ajax({
                type: "POST",
                url: process,
                dataType:"json",
                data:param,
                success:function(data){
                    var result = data.result;
                    if(result == 'ok'){
                        alert('정상적으로 수정되었습니다.');
                    }else{
                        alert('처리중 오류가 발생했습니다.');
                        return;
                    }
                },
                error:function(xhr){
                    alert('처리중 오류가 발생했습니다.');
                    return false;
                }
            });
        },
        del: function(code){
            if(code == '') return;
            if(confirm('해당 데이터를 삭제 하시겠습니까?')){
                var param = "code=" + code;

                $.ajax({
                    type: "POST",
                    url: process,
                    dataType:"json",
                    data:"mode=del&" + param,
                    success:function(data){
                        var result = data.result;
                        var rurl = data.returnURL;
                        if(result == 'ok'){
                            alert('정상적으로 삭제 되었습니다.');
                            window.document.location.reload();
                        }else{
                            alert('처리중 오류가 발생했습니다.');
                            return;
                        }
                    },
                    error:function(xhr){
                        alert('처리중 오류가 발생했습니다.');
                        return false;
                    }
                });
            }
        },
        setStatus: function(code,value){
            var param = "mode=set_status&code=" + code + "&value=" + value;
            $.ajax({
                type: "POST",
                url: process,
                dataType:"json",
                data:param,
                success:function(data) {
                    var result = data.result;

                    if(result == 'ok'){
                        alert('정상적으로 변경 되었습니다.');
                    }
                },
                error:function(xhr){
                    alert('처리중 오류가 발생했습니다.');
                    return false;
                }
            });
        },
        setMngTxt: function(code){
            var txt = $("#mng_txt").val();

            var param = "mode=set_mngtxt&code=" + code + "&value=" + txt;
            $.ajax({
                type: "POST",
                url: process,
                dataType:"json",
                data:param,
                success:function(data) {
                    var result = data.result;
                    if(result == 'ok'){
                        alert('정상적으로 변경 되었습니다.');
                    }
                },
                error:function(xhr){
                    alert('처리중 오류가 발생했습니다.');
                    return false;
                }
            });
        },
        search: function(){
            var param = $("#_schF").serialize();
            window.document.location.replace("index.php?" + param );
        },
        dealerSearch: function(){
            var param = $("#_schF").serialize();
            window.document.location.replace("day.php?" + param );
        },
        downExcel:function(){
            var frm = document.listF;
            frm.action = process;
            frm.submit();
        },
        goTel: function(hp,flag){
            var param = "mode=save_click&flag=" + flag + "&hp=" + hp;
            $.ajax({
                type: "POST",
                url: process,
                dataType:"json",
                data:param,
                success:function(data) {
                    var result = data.result;
                    if(result == 'ok'){
                        document.location.href= flag + ":" + hp;
                    }
                },
                error:function(xhr){
                    alert('처리중 오류가 발생했습니다.');
                    return false;
                }
            });
        },
        openConcernForm: function(){
            $('.pu_app').fadeIn(200);
            $('.pu_bg').fadeIn(200);
            $('html').addClass('on');
        },
        openSmsForm: function(){
            $('.pu_map').fadeIn(200);
            $('.pu_bg').fadeIn(200);
            $('html').addClass('on');
        },
        regReser: function(){
            try{
                if(event_end == true){
                    alert('이벤트가 마감되었습니다.');
                    return;
                }
            }catch(e){}
            var frm = document._zz_reser_F;
            if(!chkInputType(frm,'name','이름을',0,'')) return ;
            if(!chkInputType(frm,'hp1','전화번호를',0,'')) return ;
            if(!chkInputType(frm,'hp2','전화번호를',0,'')) return ;
            if(!chkInputType(frm,'hp3','전화번호를',0,'')) return ;

            if(!frm.reser_agree.checked && !frm.reser_agree.checked){
                alert('개인정보 취급방침에 동의하셔야 신청이 가능합니다.');
                frm.reser_agree.focus();
                return;
            }
            if(!confirm('신청 하시겠습니까?')) return;
            var param = $("#_zz_reser_F").serialize();
            $.ajax({
                type: "POST",
                url: process,
                dataType:"json",
                data:param,
                success:function(data){
                    var result = data.result;
                    if(result == 'ok'){
                        alert('정상적으로 등록되었습니다.');
                        frm.reset();
                        $(".pu_bg").hide();
                        $(".pu_app").hide();
                        $('html').removeClass('on');
                    }else if(result == 'same'){
                        alert('이미 이벤트에 가입하셨습니다.');
                        return;
                    }else{
                        alert('처리중 오류가 발생했습니다.');
                        return;
                    }
                },
                error:function(xhr){
                    alert('처리중 오류가 발생했습니다.');
                    return false;
                }
            });
        },
        sendSms: function(){
            try{
                if(event_end == true){
                    alert('이벤트가 마감되었습니다.');
                    return;
                }
            }catch(e){}
            var frm = document._zz_sms_F;
            if(!chkInputType(frm,'name','이름을',0,'')) return ;
            if(!chkInputType(frm,'hp1','전화번호를',0,'')) return ;
            if(!chkInputType(frm,'hp2','전화번호를',0,'')) return ;
            if(!chkInputType(frm,'hp3','전화번호를',0,'')) return ;

            if(!frm.sms_agree.checked && !frm.sms_agree.checked){
                alert('개인정보 취급방침에 동의하셔야 신청이 가능합니다.');
                frm.sms_agree.focus();
                return;
            }
            if(!confirm('문자를 전송 하시겠습니까?')) return;
            var param = $("#_zz_sms_F").serialize();
            $.ajax({
                type: "POST",
                url: process,
                dataType:"json",
                data:param,
                success:function(data){
                    var result = data.result;
                    if(result == 'ok'){
                        alert('정상적으로 발송되었습니다.');
                        frm.reset();

                        $(".pu_bg").hide();
                        $(".pu_map").hide();
                        $('html').removeClass('on');
                    }else if(result == 'same'){
                        alert('이미 이벤트에 가입하셨습니다.');
                        return;
                    }else{
                        alert('처리중 오류가 발생했습니다.');
                        return;
                    }
                },
                error:function(xhr){
                    alert('처리중 오류가 발생했습니다.');
                    return false;
                }
            });
        },
    }
}();