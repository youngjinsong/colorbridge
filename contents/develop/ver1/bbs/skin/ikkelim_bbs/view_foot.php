<?
 /* ���� �����۰� ��ư ǥ��
 
  --- ����/ ���ı� ��ũ ---
  <?=$a_prev?> : ������ ��ũ
  <?=$a_next?> : ������ ��ũ

  <?=$prev_face_image?> : ������ �۾����� �� ������?;
  <?=$next_face_image?> : ������ �۾����� �� ������?;


  <?=$hide_prev_start?> <?=$hide_prev_end?> : ������ ��Ÿ����/ �����
  <?=$hide_next_start?> <?=$hide_next_end?> : ������ ��Ÿ����/ �����

  ��Ÿ �����̳� �۾��̵��� ���� ����Ÿ���� �տ� prev_ , next_ �� �� ���ΰ���;
  ex) ������ ���� : <?=$prev_subject?>

  <?=$a_write?> : �۾��� ��ư
  <?=$a_list?> : ��Ϻ��� ��ư
  <?=$a_reply?> : ��۾��� ��ư
  <?=$a_delete?> : �ۻ��� ��ư
  <?=$a_vote?> : ��õ��ư
  <?=$a_modify?> : �ۼ��� ��ư

 */
?>

<!-- ���� / ������ ��� -->

<?=$hide_prev_start?>
<table border=0 width=<?=$width?> cellspacing=0 cellpadding=2>
<col width=50></col><col width=></col><col width=80></col>
	<td colspan=8 height=1 class=line></td>
<tr align=center height=25>
  <td width=50 class=en><font color=aaaaaa>prev</td>
  <td align=left style='word-break:break-all;'>&nbsp; <?=$a_prev?><?=$prev_subject?></a></td>
  <td width=80 nowrap><?=$prev_face_image?> <?=$prev_name?></td>
</tr>
	<td colspan=8 height=1 class=line></td>
</table>
<?=$hide_prev_end?>

<?=$hide_next_start?>
<table border=0 width=<?=$width?> cellspacing=0 cellpadding=2>
<col width=50></col><col width=></col><col width=80></col>
<tr align=center height=25>
  <td width=50 class=en><font color=aaaaaa>next</td>
  <td align=left style='word-break:break-all;'>&nbsp; <?=$a_next?><?=$next_subject?></a></td>
  <td width=80 nowrap><?=$next_face_image?> <?=$next_name?></td>
</tr>
	<td colspan=8 height=1 class=line></td>
</table>
<?=$hide_next_end?>

<!-- ��ư ���� ��� -->
<br>
<table border=0 cellspacing=0 cellpadding=3 width=<?=$width?>>
<tr>
 <td class=en>
    <?=$a_list?>list</a>
    <?=$a_write?>write</a>
 </td>
 <td align=right class=en>
    <?=$a_reply?>reply</a>
    <?=$a_modify?>modify</a>
    <?=$a_delete?>delete</a>
 </td>
</tr>
</table>
<br><br>

