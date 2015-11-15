<? 
  /*
  이 파일은 게시판에서 상단의 상태를 보여줍니다.
  
  <?=$width?> : 게시판의 가로크기
  <?=$dir?> : 스킨디렉토리를 가리킵니다.
  <?=$total?> : 전체 글수
  <?=$total_page?> : 전체 페이지수
  <?=$a_status?> : 통계링크
  <?=$a_login?> : 로그인 버튼
  <?=$a_logout?> : 로그오프버튼
  <?=$page?> : 현재페이지 표시

  <?=$a_member_join?> : 회원가입
  <?=$a_member_modify?> : 회원정보수정
  <?=$a_member_memo?> : 쪽지;;
  <?=$member_memo_icon?> : 쪽지아이콘;;
  <?=$memo_on_sound?> : 쪽지가 왔을때 소리 나오는 변수 memo_on.swf

  <?=$total_connect?> : 현재 전체 회원 로그인수
  <?=$group_connect?> : 현재 그룹 로그인수

  * 쪽지아이콘은 member_memo_on.gif, member_memo_off.gif 파일이 있습니다. (기본)
    member_memo_on.gif는 새로운 쪽지가 있을때, 글고 member_memo_off.gif는 새쪽지가 없을때입니다;;

  */ 
?>

<table border=0 cellspacing=0 cellpadding=0 width=<?=$width?>>
<tr>
  <td height=27><? include "include/print_category.php"; ?>
    <?=$memo_on_sound?>
  </td>
  <td align=right class=en>
    <?=$a_login?>login </a>
    <?=$a_member_join?> join </a>
    <?=$a_member_modify?>modify </a>
    <?=$a_member_memo?>memo </a>
    <?=$a_logout?>logout </a>
    <?=$a_setup?>admin </a>
    &nbsp;
  </td>
</tr>
</table>

<? 
 if($setup[use_category]) 
 { 
?>
<table border=0 width=<?=$width?> cellspacing=0 cellpadding=0>
<col width=100></col><col width=10></col><col width=></col>
<tr valign=top>
  <td align=right>

<? 
 $width="100%";
 }
?>
