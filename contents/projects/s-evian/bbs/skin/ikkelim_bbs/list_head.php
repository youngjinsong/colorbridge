<? /////////////////////////////////////////////////////////////////////////
  /*
  �� ������ ����Ʈ�� ��� �κ��� �����ִ� ���Դϴ�
  <?=$a_ �� ���۵Ǵ� �׸��� HTML�� <a ��� �����Ͻø� �˴ϴ�.
  �ڿ� </a>�� �ٿ��ָ� ����;
  ������ ��Ų ���۽� ����� �ִ� ���� �Դϴ�. �״�� ����Ͻø� �˴ϴ�;;;;

  <?=$width?> : �Խ����� ����ũ��
  <?=$dir?> : ��Ų���丮�� ����ŵ�ϴ�.
  <?=$print_page?> : �������� �����ݴϴ�
  <?=$a_status?> : ��踵ũ
  <?=$a_login?> : �α��� ��ư
  <?=$a_logout?> : �α׿�����ư
  <?=$a_no?> : ��������.. �� ������� ����
  <?=$a_subject?> : ��������
  <?=$a_name?> : �̸�����
  <?=$a_hit?> : ��ȸ�� ����
  <?=$a_vote?> : ��õ�� ����
  <?=$a_date?> : ���ں� ����
  <?=$a_download1?> : ù���� �׸��� �ڷ� �ٿ�ε� ���� ����
  <?=$a_download2?> : �ι�° �׸��� �ڷ� �ٿ�ε� ���� ����
  <?=$a_cart?> : �ٱ��� ���� ��ũ
  <?=$a_category?> : ī�װ� ����

  <?=$a_write?> : �۾��� ��ư
  <?=$a_list?> : ��Ϻ��� ��ư
  <?=$a_reply?> : ��۾��� ��ư
  <?=$a_delete?> : �ۻ��� ��ư
  <?=$a_modify?> : �ۼ��� ��ư
  <?=$a_delete_all?> : �������϶� ��Ÿ���� ���õ� �� ���� ��ư;;

  �ٱ��Ͽ� ī�װ��� ��� ������� �ʴ� ���� �����Ƿ� ���ܳ����� ���� ����;;
  <?=$hide_cart_start?> ���� <?=$hide_cart_end?> : start �� end ���̿��� �����;; �ٱ���
  <?=$hide_category_start?> ���� <?=$hide_category_end?> : Start�� end ���̿��� �����;; �ٱ���
  */ 
?>

<table border=0 cellspacing=0 cellpadding=2 width=<?=$width?>>
<col width=33></col><?=$hide_cart_start?><col width=17></col><?=$hide_cart_end?><col width=></col>

<tr align=center>

   <?=$hide_cart_start?>
   <td width=20>
        <?=$a_cart?>
   </td>
   <?=$hide_cart_end?>

   <td width=30></td>
   <td width=><form method=post name=list action=list_all.php><input type=hidden name=page value=<?=$page?>><input type=hidden name=id value=<?=$id?>><input type=hidden name=select_arrange value=<?=$select_arrange?>><input type=hidden name=desc value=<?=$desc?>><input type=hidden name=page_num value=<?=$page_num?>><input type=hidden name=selected><input type=hidden name=exec><input type=hidden name=keyword value="<?=$keyword?>"><input type=hidden name=sn value="<?=$sn?>"><input type=hidden name=ss value="<?=$ss?>"><input type=hidden name=sc value="<?=$sc?>"></a>

   </td>



</tr>
	<td colspan=8 height=1 class=line></td>
