</tbody>
</table>

<?
	if(!eregi("Zeroboard",$a_list)) $a_list = str_replace(">","class='button'>",$a_list);
	if(!eregi("Zeroboard",$delete_all)) $a_delete_all = str_replace(">","class='button'><span>",$a_delete_all);
	if(!eregi("Zeroboard",$a_write)) $a_write = str_replace(">","class='button strong'>",$a_write);
	if(!eregi("Zeroboard",$a_prev_page)) $a_prev_page = str_replace(">","class='button'>",$a_prev_page);
	if(!eregi("Zeroboard",$a_next_page)) $a_next_page = str_replace(">","class='button'>",$a_next_page);
	//$print_page = str_replace("[","",$print_page);
	//$print_page = str_replace("]","",$print_page);
	$print_page = str_replace("<font style=font-size:8pt>","<font class=print_page>",$print_page);
	$print_page = str_replace("��� �˻�","<font class=list_han>��� �˻�",$print_page);
	$print_page = str_replace("���� �˻�","<font class=list_han>��� �˻�",$print_page);
?>

<div class="boardlistfoot">
<div class="btnlist">
		<?=$a_list?><span>��Ϻ���</span></a>
		<?=$a_delete_all?>�����ڱ��</span></a>
</div>

<?=$a_prev_page?>[���� <?=$setup[page_num]?>��]</a></font> <?=$print_page?> <?=$a_next_page?>[���� <?=$setup[page_num]?>��]</font></a>

<div class="btnwrite">
<?=$a_write?><img src="<?=$dir?>/img/ico-btn-write.gif" /><span>�۾���</span></a>
</div>
</div>





<div class="boardsearch">
<script language="javascript">
function zbSearchSelectOption(key) {
	document.getElementById('search').sn.value = 'off';
	document.getElementById('search').ss.value = 'off';
	document.getElementById('search').sc.value = 'off';
	document.search[key].value = 'on';
}
</script>
		</form>
		<form method=get name=search action=<?=$PHP_SELF?>><input type=hidden name=id value=<?=$id?>><input type=hidden name=select_arrange value=<?=$select_arrange?>><input type=hidden name=desc value=<?=$desc?>><input type=hidden name=page_num value=<?=$page_num?>><input type=hidden name=selected><input type=hidden name=exec><input type=hidden name=sn value="<?=$sn?>"><input type=hidden name=ss value="<?=$ss?>"><input type=hidden name=sc value="off"><input type=hidden name=category value="<?=$category?>">

			<select onChange="zbSearchSelectOption(this.options[this.selectedIndex].value);">
			<option value="sn" <?if($_GET[sn]=="on"){?>selected="selected"<?}?>>�̸�����</option>
			<option value="ss" <?if($_GET[ss]=="on"){?>selected="selected"<?}?>>��������</option>
			<option value="sc" <?if($_GET[sc]=="on"){?>selected="selected"<?}?>>��������</option>
			</select>

			<input type=text name=keyword value="<?=$keyword?>" class=search size=25 align=absmiddle>
			<span class="button searchbtn strong"><input type=submit value="�˻�" /></span>
			<span class="button searchbtn"><input type=button value="���" onclick=location.href="zboard.php?id=<?=$id?>" /></span>
		</form>
</div>