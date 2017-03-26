<?
	if($mode=="reply") $title="답글 쓰기";
	elseif($mode=="modify") $title="글 수정하기";
	else $title="새로 글 쓰기";

$width = str_replace("%","",$width);
if ($width > "100") { $width = $width."px"; } else { $width = $width."%"; }
?>

<script LANGUAGE="JavaScript">
<!--
function zb_formresize(obj) {
	obj.rows += 3;
}
// -->
</script>

<form method=post name=write action=write_ok.php onsubmit="return check_submit();" enctype=multipart/form-data>
<input type=hidden name=page value=<?=$page?>>
<input type=hidden name=id value=<?=$id?>>
<input type=hidden name=no value=<?=$no?>>
<input type=hidden name=select_arrange value=<?=$select_arrange?>>
<input type=hidden name=desc value=<?=$desc?>>
<input type=hidden name=page_num value=<?=$page_num?>>
<input type=hidden name=keyword value="<?=$keyword?>">
<input type=hidden name=category value="<?=$category?>">
<input type=hidden name=sn value="<?=$sn?>">
<input type=hidden name=ss value="<?=$ss?>">
<input type=hidden name=sc value="<?=$sc?>">
<input type=hidden name=mode value="<?=$mode?>">

<table border="0" cellspacing="0" class="boardwrite" style="width:<?=$width?>;">
<thead>
<tr>
<th colspan="2"><?=$title?></th>
</tr>
</thead>

<tbody>
<?=$hide_start?>
<tr>
<th>이름</th>
<td><input type="text" name="name" value="<?=$name?>" <?=size(20)?> maxlength="20" class="input_text" /></td>
</tr>
<tr>
<th>비밀번호</th>
<td><input type="password" name="password" <?=size(20)?> maxlength="20" class="input_text" /></td>
</tr>
<tr>
<th>이메일</th>
<td><input type="text" name="email" value="<?=$email?>" <?=size(40)?> maxlength="200" class="input_text" /></td>
</tr>
<tr>
<th>홈페이지</th>
<td><input type="text" name="homepage" value="<?=$homepage?>" <?=size(40)?> maxlength="200" class="input_text" /></td>
</tr>
<?=$hide_end?>
<tr>
<th>옵션</th>
<td>
<?=$category_kind?>
<?=$hide_notice_start?><input type=checkbox name=notice <?=$notice?> value=1 /> 공지사항<?=$hide_notice_end?>
<?=$hide_html_start?><input type=checkbox name=use_html <?=$use_html?> value=1 /> HTML사용<?=$hide_html_end?>
<input type=checkbox name=reply_mail <?=$reply_mail?> value=1 /> 답변메일받기
<?=$hide_secret_start?><input type=checkbox name=is_secret <?=$secret?> value=1 /> 비밀글<?=$hide_secret_end?>
</td>
</tr>
<tr>
<th>제목</th>
<td><input type="text" name="subject" value="<?=$subject?>" <?=size(60)?> maxlength="200" style="width:99%;" class="input_text" /></td>
</tr>
<tr>
<th onclick=document.write.memo.rows=document.write.memo.rows+4 style=cursor:hand>내용 ▼</th>
<td><textarea name=memo <?=size2(90)?> rows=18 class=textarea style=width:99%><?=$memo?></textarea></td>
</tr>
<?=$hide_sitelink1_start?>
<tr>
<th>Link #1</th>
<td><input type=text name=sitelink1 value="<?=$sitelink1?>" <?=size(62)?> maxlength=200 class="input_text" style="width:98%;" /></td>
</tr>
<?=$hide_sitelink1_end?>
<?=$hide_sitelink2_start?>
<tr>
<th>Link #2</th>
<td><input type=text name=sitelink2 value="<?=$sitelink2?>" <?=size(62)?> maxlength=200 class="input_text" style="width:98%;" /></td>
</tr>
<?=$hide_sitelink2_end?>
<?=$hide_pds_start?>
<tr>
<th>Upload #1</th>
<td><input type="file" name="file1" <?=size(50)?> maxlength="255" class="input_text" style="width:98%;" /> <?=$file_name1?></td>
</tr>
<tr>
<th>Upload #2</th>
<td><input type="file" name="file2" <?=size(50)?> maxlength="255" class="input_text" style="width:98%;" /> <?=$file_name2?></td>
</tr>
<?=$hide_pds_end?>
</tbody>
<tfoot>
<tr><td colspan="2">

<div class="btnpreview">
<?
$a_preview = str_replace(">","class=button>",$a_preview);
$a_imagebox = str_replace(">","class=button><span>",$a_imagebox);
?>
<?=$a_preview?><span>미리보기</span></a>
<?=$a_imagebox?>그림창고</span></a>
</div>

<span class="button strong"><input type="submit" value="작성완료" class="submit" accesskey="s" /></span>
<span class="button"><input type="button" value="취소하기" onclick="history.back()" /></span>

</td></tr>
</tfoot>
</table>