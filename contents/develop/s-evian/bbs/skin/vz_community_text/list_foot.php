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
	$print_page = str_replace("계속 검색","<font class=list_han>계속 검색",$print_page);
	$print_page = str_replace("이전 검색","<font class=list_han>계속 검색",$print_page);
?>

<div class="boardlistfoot">
<div class="btnlist">
		<?=$a_list?><span>목록보기</span></a>
		<?=$a_delete_all?>관리자기능</span></a>
</div>

<?=$a_prev_page?>[이전 <?=$setup[page_num]?>개]</a></font> <?=$print_page?> <?=$a_next_page?>[다음 <?=$setup[page_num]?>개]</font></a>

<div class="btnwrite">
<?=$a_write?><img src="<?=$dir?>/img/ico-btn-write.gif" /><span>글쓰기</span></a>
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
			<option value="sn" <?if($_GET[sn]=="on"){?>selected="selected"<?}?>>이름으로</option>
			<option value="ss" <?if($_GET[ss]=="on"){?>selected="selected"<?}?>>제목으로</option>
			<option value="sc" <?if($_GET[sc]=="on"){?>selected="selected"<?}?>>내용으로</option>
			</select>

			<input type=text name=keyword value="<?=$keyword?>" class=search size=25 align=absmiddle>
			<span class="button searchbtn strong"><input type=submit value="검색" /></span>
			<span class="button searchbtn"><input type=button value="취소" onclick=location.href="zboard.php?id=<?=$id?>" /></span>
		</form>
</div>