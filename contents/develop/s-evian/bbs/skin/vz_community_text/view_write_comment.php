<?
$width = str_replace("%","",$width);
if ($width > "100") { $width = $width."px"; } else { $width = $width."%"; }
?>

<script type="text/javascript">
	function check_comment_submit(obj) {
		if(obj.memo.value.length<10) {
			alert("코멘트는 10자 이상 적어주세요");
			obj.memo.focus();
			return false;
		}
		return true;
	}
</script>
<form method=post name=write action=comment_ok.php onsubmit="return check_comment_submit(this)"><input type=hidden name=page value=<?=$page?>><input type=hidden name=id value=<?=$id?>><input type=hidden name=no value=<?=$no?>><input type=hidden name=select_arrange value=<?=$select_arrange?>><input type=hidden name=desc value=<?=$desc?>><input type=hidden name=page_num value=<?=$page_num?>><input type=hidden name=keyword value="<?=$keyword?>"><input type=hidden name=category value="<?=$category?>"><input type=hidden name=sn value="<?=$sn?>"><input type=hidden name=ss value="<?=$ss?>"><input type=hidden name=sc value="<?=$sc?>"><input type=hidden name=mode value="<?=$mode?>">

<table cellspacing="0" class="boardcmtwrite" style="width:<?=$width?>;">
<tr>
<td class="memowrite">
<textarea name=memo cols=20 rows=5 class="textarea"></textarea>
</td>
</tr>
<tr>
<td>
<?if(!$member['no']){?>이름 <?=$c_name?>&nbsp;<?}?>
<?=$hide_c_password_start?>
비밀번호 <input type=password name=password <?=size(14)?> maxlength=20 class=input_text />
<?=$hide_c_password_end?>
<span class="button black"><input type="submit" class="submit" value="댓글입력" accesskey="s" /></span>
</td></tr>
</table>
</form>
