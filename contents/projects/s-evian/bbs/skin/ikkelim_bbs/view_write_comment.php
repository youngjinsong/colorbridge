<?
 /* ������ ��� ���� ǥ��

  -- ������ ��� ����
  <?=$hide_comment_start?> <?=$hide_comment_end?> : ������ ��� ���� �����ֱ�/ �����
  <?=$hide_c_password_start?> <?=$hide_c_password_end?> : ������ ��۽� ��й�ȣ �Է� �����ֱ�/ �����;;

  <?=$c_name?> : �ڸ�Ʈ�� �̸� �Է��ϴ� ��;;

  ** view.php ���� �Ʒ��ʿ� ������ ����� �����ϴ� <table>�±� ���ۺκ��� �ֽ��ϴ�.
     �׸��� ������ ����� ������ view_comment_view.php ���Ͽ��� ����� �մϴ�.

 */
?>

</table>
<div align=center>

<br>

<table border=0 width=<?=$width?> cellspacing=1 cellpadding=3>
<tr align=center>
  <td><form method=post name=write action=comment_ok.php><input type=hidden name=page value=<?=$page?>><input type=hidden name=id value=<?=$id?>><input type=hidden name=no value=<?=$no?>><input type=hidden name=select_arrange value=<?=$select_arrange?>><input type=hidden name=desc value=<?=$desc?>><input type=hidden name=page_num value=<?=$page_num?>><input type=hidden name=keyword value="<?=$keyword?>"><input type=hidden name=category value="<?=$category?>"><input type=hidden name=sn value="<?=$sn?>"><input type=hidden name=ss value="<?=$ss?>"><input type=hidden name=sc value="<?=$sc?>"><input type=hidden name=mode value="<?=$mode?>"></td>

</tr>

<tr align=left>

  <td colspan="2"><textarea name=memo cols=20 rows=6 class=textarea style=width:100%></textarea></td></tr>
<tr><td><font size=1 font face=tahoma>
name <?=$c_name?>  <?=$hide_c_password_start?>&nbsp;&nbsp;pass <input type=password name=password <?=size(10)?> maxlength=20 class=input><?=$hide_c_password_end?>&nbsp;&nbsp;&nbsp;&nbsp;<td align="right"><input type=submit value="   comment   " accesskey="s"  class=submit style=height:25></td></tr>
</tr>
<tr>
  </td>
</tr>
</table>
</form>

</div>

<?=$hide_comment_end?>
