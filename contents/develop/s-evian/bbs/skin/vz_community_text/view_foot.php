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
    <?=$a_reply?>��۴ޱ�</span></a>
    <?=$a_modify?>�����ϱ�</span></a>
    <?=$a_delete?>�����ϱ�</span></a>
    <?=$a_vote?>��õ�ϱ�</span></a>
</div>

<div class="btnwrite">
    <?=$a_list?>��Ϻ���</span></a>
	<?=$a_write?><img src="<?=$dir?>/img/ico-btn-write.gif" /><span>�۾���</span></a>
</div>
</div>
<br class="clear" />