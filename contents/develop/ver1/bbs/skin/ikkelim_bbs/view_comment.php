<? 
    $memostr = explode("||",$c_memo);
    if ($memostr[1] =="") {
	$memostr[1] = 1;
    }
?>
<?
  /* ������ ����� ����ϴ� �κ��Դϴ�.
   view.php��Ų���Ͽ� ������ ����� �����ϴ� <table>���� �±װ� ���۵Ǿ� �ֽ��ϴ�.
   �׸���view_foot.php ���Ͽ� </table>�±װ� ������ ��� ���� ���� ���� �ֽ��ϴ�

  <?=$comment_name?> : �۾���
  <?=$c_memo?> : ����
  <?=$c_reg_date?> : ���� �� ����;;
  <?=$a_del?> : �ڸ�Ʈ ���� ��ư��ũ
  <?=$c_face_image?> : ����� ������;;
 */
?>

<tr valign=top>
    <td nowrap width=80><?=$c_face_image?> <span style="font-size:8pt;"><font face="����"><?=$comment_name?></span></font></td>
    <td align=left style='word-break:break-all;' align=right valign=top> <span style="font-size:8pt;"><font face="����"><?=str_replace("\n","<br>",$memostr[0])?> <?=$a_del?>x</a></td>
    <td width=20 nowrap class=n><?=$c_reg_date?></td>

</tr>