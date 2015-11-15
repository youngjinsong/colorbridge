<tr>
<td class="num"><?=$number?></td>
<td class="title" style="word-break:break-all;overflow-x:hidden;">
<?=$icon?>
<?=$hide_category_start?>
<span class="cate">[<?=$category_name?>]</span>
<?=$hide_category_end?>
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
