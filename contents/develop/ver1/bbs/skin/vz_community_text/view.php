<?
	$name = str_replace(">","><font class=list_han>",$name);
	$homepage = str_replace(">","><font class=list_eng></b>",$homepage);
	$a_file_link1 = str_replace(">","><font class=list_eng></b>",$a_file_link1);
	$a_file_link2 = str_replace(">","><font class=list_eng></b>",$a_file_link2);
	$sitelink1 = str_replace(">","><font class=list_eng></b>",$sitelink1);
	$sitelink2 = str_replace(">","><font class=list_eng></b>",$sitelink2);
	$memo = str_replace("<table border=0 cellspacing=0 cellpadding=0 width=100% style=\"table-layout:fixed;\"><col width=100%></col><tr><td valign=top>","<table border=0 cellspacing=0 cellpadding=0 width=100% style=\"table-layout:fixed;\"><col width=100%></col><tr><td valign=top class=list_han>",$memo);

$width = str_replace("%","",$width);
if ($width > "100") { $width = $width."px"; } else { $width = $width."%"; }
?>



<div class="boardview" style="width:<?=$width?>;">
<!-- 제목 -->
<h4 class="title"><?=$subject?></h4>

<!-- 글쓴이 등 -->
<ul class="writer">
<li>
<span class="name"><?=$face_image?> <?=$name?></span>
<span class="date"><?//=$ip?> <?=$date?></span>
<span class="readnum">조회 <?=number_format($hit)?></span>
<span class="good">추천 <?=$vote?></span>
</li>
</ul>

<?=$hide_sitelink1_start?>
<div class='link'><img src="<?=$dir?>/img/icon_link.gif" align="absmiddle" /> <?=$sitelink1?></div>
<?=$hide_sitelink1_end?>
<?=$hide_sitelink2_start?>
<div class='link'><img src="<?=$dir?>/img/icon_link.gif" align="absmiddle" /> <?=$sitelink2?></div>
<?=$hide_sitelink2_end?>

<?=$hide_download1_start?>
<div class='file'>
<img src="<?=$dir?>/img/icon_file.gif" align="absmiddle" />
<?=$a_file_link1?><?=$file_name1?> (<?=$file_size1?>)</a>, Download : <?=$file_download1?>
</div>
<?=$hide_download1_end?>
<?=$hide_download2_start?>
<div class='file'>
<img src="<?=$dir?>/img/icon_file.gif" align="absmiddle" />
<?=$a_file_link2?><?=$file_name2?> (<?=$file_size2?>)</a>, Download : <?=$file_download2?>
</div>
<?=$hide_download2_end?>

<div class='fileview'>
<?=$upload_image1?>
<?=$upload_image2?>
</div>

<div class="contents">
<?=$memo?>
</div>


</div>






<?if($member['level']<=$setup['grant_comment']){?>
<?=$hide_comment_start?>

<?=$hide_comment_end?>
<?}?>
