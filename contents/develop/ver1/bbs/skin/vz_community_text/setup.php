<?
$width = str_replace("%","",$width);
if ($width > "100") { $width = $width."px"; } else { $width = $width."%"; } ?>

<div style="width:<?=$width?>;">
<?
if(!eregi("Zeroboard",$a_login)) $a_login= str_replace(">",">",$a_login)."&nbsp;";
if(!eregi("Zeroboard",$a_logout)) $a_logout= str_replace(">",">",$a_logout)."&nbsp;";
if(!eregi("Zeroboard",$a_setup)) $a_setup= str_replace(">",">",$a_setup)."&nbsp;";
if(!eregi("Zeroboard",$a_member_join)) $a_member_join= str_replace(">",">",$a_member_join)."&nbsp;";
if(!eregi("Zeroboard",$a_member_modify)) $a_member_modify= str_replace(">",">",$a_member_modify)."&nbsp;";
if(!eregi("Zeroboard",$a_member_memo)) $a_member_memo= str_replace(">",">",$a_member_memo)."&nbsp;";
?>

<div class="boardsetup">
<div class="categoryarea"><?=$hide_category_start?><?=$a_category?><?=$hide_category_end?></div>
<div class="menuarea">
<?=$a_login?>�α���</a>
<?=$a_member_join?>ȸ������</a>
<?=$a_member_modify?>��������</a>
<?=$a_member_memo?>�޸�ڽ�</a>
<?=$a_logout?>�α׾ƿ�</a>
<?=$a_setup?>��������</a>
</div>
</div>
<br class="clear" />