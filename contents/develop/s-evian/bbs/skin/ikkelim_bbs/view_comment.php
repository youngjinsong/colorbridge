<? 
    $memostr = explode("||",$c_memo);
    if ($memostr[1] =="") {
	$memostr[1] = 1;
    }
?>
<?
  /* 간단한 답글을 출력하는 부분입니다.
   view.php스킨파일에 간단한 답글을 시작하는 <table>시작 태그가 시작되어 있습니다.
   그리고view_foot.php 파일에 </table>태그가 간단한 답글 쓰기 폼과 같이 있습니다

  <?=$comment_name?> : 글쓴이
  <?=$c_memo?> : 내용
  <?=$c_reg_date?> : 글을 쓴 날자;;
  <?=$a_del?> : 코멘트 삭제 버튼링크
  <?=$c_face_image?> : 멤버용 아이콘;;
 */
?>

<tr valign=top>
    <td nowrap width=80><?=$c_face_image?> <span style="font-size:8pt;"><font face="돋움"><?=$comment_name?></span></font></td>
    <td align=left style='word-break:break-all;' align=right valign=top> <span style="font-size:8pt;"><font face="돋움"><?=str_replace("\n","<br>",$memostr[0])?> <?=$a_del?>x</a></td>
    <td width=20 nowrap class=n><?=$c_reg_date?></td>

</tr>