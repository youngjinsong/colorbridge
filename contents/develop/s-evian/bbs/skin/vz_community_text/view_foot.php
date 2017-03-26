<?
if(!eregi("Zeroboard",$a_list)) $a_list = str_replace(">","class='button'><span>",$a_list);
if(!eregi("Zeroboard",$a_reply)) $a_reply = str_replace(">","class='button'><span>",$a_reply);
if(!eregi("Zeroboard",$a_modify)) $a_modify = str_replace(">","class='button'><span>",$a_modify);
if(!eregi("Zeroboard",$a_delete)) $a_delete = str_replace(">","class='button'><span>",$a_delete);
if(!eregi("Zeroboard",$a_write)) $a_write = str_replace(">","class='button'>",$a_write);
if(!eregi("Zeroboard",$a_vote)) $a_vote = str_replace(">","class='button'><span>",$a_vote);

$width = str_replace("%","",$width);
if ($width > "100") { $width = $width."px"; } else { $width = $width."%"; }
?>


<div class="boardlistfoot" style="width:<?=$width?>;">
<div class="btnlist">
    <?=$a_reply?>답글달기</span></a>
    <?=$a_modify?>수정하기</span></a>
    <?=$a_delete?>삭제하기</span></a>
    <?=$a_vote?>추천하기</span></a>
</div>

<div class="btnwrite">
    <?=$a_list?>목록보기</span></a>
	<?=$a_write?><img src="<?=$dir?>/img/ico-btn-write.gif" /><span>글쓰기</span></a>
</div>
</div>
<br class="clear" />