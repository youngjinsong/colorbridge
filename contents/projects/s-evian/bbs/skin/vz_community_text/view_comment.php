<?
	$comment_name = str_replace(">",">",$comment_name);
	if($is_admin) $show_comment_ip = "".$c_data['ip']."";
	else $show_comment_ip = "";

$width = str_replace("%","",$width);
if ($width > "100") { $width = $width."px"; } else { $width = $width."%"; }
?>

<!-- 코멘트 리스트 -->
<table cellspacing="0" class="boardcommentlist" style="width:<?=$width?>;">
	<tr>
	<td class="cmtlistview">
	<div class="cmtlisthead">
	<div class="cmtlistwriter">
	<strong><?=$c_face_image?> <?=$comment_name?></strong>
	<span class="cmtdatetime"><?=date("Y-m-d",$c_data[reg_date])?> <?=date("H:i:s",$c_data[reg_date])?></span>
	<span class="cmtdatetime"><?=$show_comment_ip?></span>
	</div>
	<div class="cmtlistbtn">
	<?=$a_del?><img src="<?=$dir?>/img/co_btn_delete.gif" border="0" valign="absmiddle" /></a>
	</div>
	</div>
	<div class="cmtlisttext">
	<?=str_replace("\n","<br>",$c_memo)?>
	</div>
	</td>
	</tr>
</table>
<!-- // 코멘트 리스트 -->