<tr>
<td class="num"><img src="<?=$dir?>/img/icon_notice.gif" /></td>
<td class="title" style="word-break:break-all;overflow-x:hidden;">
<?=$hide_cart_start?>
<input type="checkbox" name="cart" value="<?=$data[no]?>" />
<?=$hide_cart_end?>
<?=$insert?>
<?=$subject?>
<span class='cmt'><?=$comment_num?></span>
</td>
<td class="name"><?=$face_image?>&nbsp;<?=$name?></td>
<td class="date"><?=$reg_date?></td>
<td class="readnum"><?=$hit?></td>
<td class="good"><?=$vote?></td>
</tr>

<?$coloring++;?>