<? /////////////////////////////////////////////////////////////////////////
  /*
  �� ������ ����� �� ����� ���� ������ ���� �κ��Դϴ�.
  ���̺��� �ݰ� ������ ����̳� �˻� ���, ��ư���� ����ϸ� �˴ϴ�.
  �Ʒ��κ��� �״�� ����Ͻø� �˴ϴ�.

  <?=$a_1_prev_page?> : ������������ ����մϴ�. (���������� �̵�)
  <?=$a_1_next_page?> : ���� �������� ����մϴ�. (���������� �̵�)
  <?=$a_prev_page?> : ������������ ����մϴ�.
  <?=$a_next_page?> : ���� �������� ����մϴ�.  
  <?=$print_page?> : �������� ����մϴ�
  <?=$a_write?> : �۾��� ��ư
  <?=$a_list?> : ��Ϻ��� ��ư
  <?=$a_reply?> : ��۾��� ��ư
  <?=$a_delete?> : �ۻ��� ��ư
  <?=$a_modify?> : �ۼ��� ��ư
  <?=$a_delete_all?> : �������϶� ��Ÿ���� ���õ� �� ���� ��ư;;
  
  */
///////////////////////////////////////////////////////////////////////// ?>

<!-- ������ �κ��Դϴ� -->


</table>

<?
/***************************************************************************
 * ��Ų���� ����� ������ ����
 **************************************************************************/

	$print_page="";
	$show_page_num=$setup[page_num]; // �ѹ��� ���� ������ ����
	$start_page=(int)(($page-1)/$show_page_num)*$show_page_num;
	$i=1;

	$a_1_prev_page= "<Zeroboard ";
	$a_1_next_page= "<Zeroboard ";
	$a_prev_page = "<Zeroboard ";
	$a_next_page = "<Zeroboard ";

	if($page>1) $a_1_prev_page="<a onfocus=blur() href='$PHP_SELF?id=$id&page=".($page-1)."&select_arrange=$select_arrange&desc=$desc&category=$category&sn=$sn&ss=$ss&sc=$sc&keyword=$keyword&sn1=$sn1&divpage=$divpage'>";

	if($page<$total_page) $a_1_next_page="<a onfocus=blur() href='$PHP_SELF?id=$id&page=".($page+1)."&select_arrange=$select_arrange&desc=$desc&category=$category&sn=$sn&ss=$ss&sc=$sc&keyword=$keyword&sn1=$sn1&divpage=$divpage'>";

	if($page>$show_page_num) {
		$prev_page=$start_page;
		$a_prev_page="<a onfocus=blur() href='$PHP_SELF?id=$id&page=$prev_page&select_arrange=$select_arrange&desc=$desc&category=$category&sn=$sn&ss=$ss&sc=$sc&keyword=$keyword&sn1=$sn1&divpage=$divpage'>";
		$print_page.="<a onfocus=blur() href='$PHP_SELF?id=$id&page=1&select_arrange=$select_arrange&desc=$desc&category=$category&sn=$sn&ss=$ss&sc=$sc&keyword=$keyword&sn1=$sn1&divpage=$divpage'><span class=en>1</a><span class=en> ..";
		$prev_page_exists = true;
		}

	while($i+$start_page<=$total_page&&$i<=$show_page_num) {
		$move_page=$i+$start_page;
		if($page==$move_page) $print_page.=" <span class=7v><b>$move_page</b></font>";
		else $print_page.="<a onfocus=blur() href='$PHP_SELF?id=$id&page=$move_page&select_arrange=$select_arrange&desc=$desc&category=$category&sn=$sn&ss=$ss&sc=$sc&keyword=$keyword&sn1=$sn1&divpage=$divpage'><span class=en>&nbsp;$move_page</a>";
		$i++;
	}

	if($total_page>$move_page) {
		$next_page=$move_page+1;
		$a_next_page="<a onfocus=blur() href='$PHP_SELF?id=$id&page=$next_page&select_arrange=$select_arrange&desc=$desc&category=$category&sn=$sn&ss=$ss&sc=$sc&keyword=$keyword&sn1=$sn1&divpage=$divpage'>";
		$print_page.="<span class=en> ... <a onfocus=blur() href='$PHP_SELF?id=$id&page=$total_page&select_arrange=$select_arrange&desc=$desc&category=$category&sn=$sn&ss=$ss&sc=$sc&keyword=$keyword&sn1=$sn1&divpage=$divpage'><span class=7v>$total_page</a>";
		$next_page_exists = true;
	}

	// �˻��� Divsion ������ �̵� ǥ��
	if($use_division) {
		if($prevdivpage&&!$prev_page_exists) $a_div_prev_page="<a onfocus=blur() href='$PHP_SELF?id=$id&&select_arrange=$select_arrange&desc=$desc&category=$category&sn=$sn&ss=$ss&sc=$sc&keyword=$keyword&sn1=$sn1&divpage=$prevdivpage'>���� �˻�</a>...";
		if($nextdivpage&&!$next_page_exists) $a_div_next_page="...<a onfocus=blur() href='$PHP_SELF?id=$id&&select_arrange=$select_arrange&desc=$desc&category=$category&sn=$sn&ss=$ss&sc=$sc&keyword=$keyword&sn1=$sn1&divpage=$nextdivpage'>��� �˻�</a>";
		$print_page = $a_div_prev_page.$print_page.$a_div_next_page;

	}

?>


<table border=0 cellpadding=0 cellspacing=0 width=<?=$width?>>
<tr>
  <td class=en height=27>
    <?=$a_list?>list</a>
    <?=$a_delete_all?>delete</a>
  </td>
  <td align=right class=en>
    <?=$a_write?>write</a>
  </td>
</tr>
<tr>
  <td align=right colspan=2 class=en height=34>
		<font class=7px><?=$a_prev_page?>prev </a></font> <?=$print_page?> <font class=7px><?=$a_next_page?>next</font></a><br><br> 
  </td>
</tr>
</form>
</table>

<table border=0 cellpadding=0 cellspacing=0 width=<?=$width?>>

<form method=post name=search action=<?=$PHP_SELF?>><input type=hidden name=page value=<?=$page?>><input type=hidden name=id value=<?=$id?>><input type=hidden name=select_arrange value=<?=$select_arrange?>><input type=hidden name=desc value=<?=$desc?>><input type=hidden name=page_num value=<?=$page_num?>><input type=hidden name=selected><input type=hidden name=exec><input type=hidden name=sn value="<?=$sn?>"><input type=hidden name=ss value="<?=$ss?>"><input type=hidden name=sc value="<?=$sc?>"><input type=hidden name=category value="<?=$category?>">

<tr>
   <td align=right>
<input type=text name=keyword value="<?=$keyword?>" class=input2 size=15>
  </td>

</tr>

<tr>
  <td align=right>

  <table border=0 cellspacing=0 cellpadding=0>
  <tr>
     <td></td>
  </tr>
  </table>

  </td>
</tr>
</form>
</table>

<? 
 if($setup[use_category])
  { 
  	$width=$setup[table_width];
  ?>
  </td>
</tr>
</table>
<?}?>
