<? /////////////////////////////////////////////////////////////////////////
  /*
  �� ������ ����Ʈ�� ��� �κ��� �����ִ� ���Դϴ�
  <?=$a_ �� ���۵Ǵ� �׸��� HTML�� <a ��� �����Ͻø� �˴ϴ�.
  �ڿ� </a>�� �ٿ��ָ� ����;
  ������ ��Ų ���۽� ����� �ִ� ���� �Դϴ�. �״�� ����Ͻø� �˴ϴ�;;;;

  <?=$face_image?> : ���� ���� ���� �۾��� �� ������;;

  <?=$width?> : �Խ����� ����ũ��
  <?=$dir?> : ��Ų���丮�� ����ŵ�ϴ�.
  <?=$a_download1?> : ù��° ������ �ٿ�ε�
  <?=$a_download2?> : �ι�° ������ �ٿ�ε�
  <?=$a_email?> : ���ϸ�ũ
  <?=$a_homepage?> : Ȩ������ ��ũ

  <?=$a_write?> : �۾��� ��ư
  <?=$a_list?> : ��Ϻ��� ��ư
  <?=$a_reply?> : ��۾��� ��ư
  <?=$a_delete?> : �ۻ��� ��ư
  <?=$a_vote?> : ��õ��ư
  <?=$a_modify?> : �ۼ��� ��ư

  �ٱ��Ͽ� ī�װ��� ��� ������� �ʴ� ���� �����Ƿ� ���ܳ����� ���� ����;;
  <?=$hide_cart_start?> ���� <?=$hide_cart_end?> : start �� end ���̿��� �����;; �ٱ���
  <?=$hide_category_start?> ���� <?=$hide_category_end?> : Start�� end ���̿��� �����;; �ٱ���
  <?=$hide_sitelink1_start?> ���� <?=$hide_sitelink1_end?> : ����Ʈ��ũ ǥ�� #1
  <?=$hide_sitelink2_start?> ���� <?=$hide_sitelink2_end?> : ����Ʈ��ũ ǥ�� #2
  <?=$hide_download1_start?> ���� <?=$hide_download1_end?> : �ٿ�ε� ǥ�� #1
  <?=$hide_download2_start?> ���� <?=$hide_download2_end?> : �ٿ�ε� ǥ�� #2
  <?=$hide_homepage_start?> ���� <?=$hide_homepage_end?> : Ȩ������ ǥ��
  <?=$hide_email_start?> ���� <?=$hide_email_end?> : Email ǥ��

  -- ������ ��� ����
  <?=$hide_comment_start?> <?=$hide_comment_end?> : ������ ��� ���� �����ֱ�/ �����


  <?=$name?> : ������ ��ũ�Ǿ� �ִ� �̸� * ���� �״�� <?=$data[name]?>
  <?=$email?> : ����.. ���� ���� ������ ����;; ���ϸ� �ִ� ���� <?=$data[email]?>
  <?=$subject?> : ����  * ���� �״�� <?=$data[suject]?>
  <?=$memo?> : ���� �κ�
  <?=$homepage?> : ��ũ�� �ɸ� Ȩ������ * Ȩ������ �ּҸ� : <?=$data[homepage]?>
  <?=$hit?> : ��ȸ��
  <?=$vote?> : ��õ��
  <?=$ip?> : �����ּ�
  <?=$comment_num?> : ������ ��� ��
  <?=$reg_date?> : �۾� ����
  <?=$category_name?> : ī�װ� �̸�
  <?=$insert?> : ����ϰ�� ��ĭ�� ���� ���̸� ����մϴ�.
  <?=$icon?>   : ���� ���� ���¿� ���� �������� ����մϴ�.
  <?=$a_file_link1?> : �ٿ�ε� ������ ������ ���ϸ�ũ #1
  <?=$a_file_link2?> : �ٿ�ε� ������ ������ ���ϸ�ũ #2
  <?=$file_name1?> : �ٿ�ε� ������ ������ �����̸� #1
  <?=$file_name2?> : �ٿ�ε� ������ ������ �����̸� #2
  <?=$file_size1?> : �ٿ�ε� ������ ������ ����ũ�� #1
  <?=$file_size2?> : �ٿ�ε� ������ ������ ����ũ�� #2
  <?=$file_download1?> : �ٿ�ε���� ȸ�� #1;
  <?=$file_download2?> : �ٿ���� ȸ�� #2
  <?=$sitelink1?> : ����Ʈ ��ũ(��ũ �ɸ���) #1
  <?=$sitelink2?> : ����Ʈ ��ũ(��ũ �ɸ���) #2

  <?=$upload_image1?> : �̹����� ���ε�Ǿ����� �׸������̸�;; #1
  <?=$upload_image2?> : �̹����� ���ε�Ǿ����� �׸������̸�;; #2

  ����: old_head.gif : �������̸鼭 12�ð��� ���� ���� ������
       new_head.gif : 12�ð��� ���� ��� ��. ����/��� �������
       reply_head.gif : 12�ð��� ���� ����� ������
       notice_head.gif : ���������϶� ������
       arror.gif : ���� ����Ʈ���� ���õǾ� �ִ� �� �տ� �ٴ� ������

  --- ����/ ���ı� ��ũ ---
  <?=$a_prev?> : ������ ��ũ
  <?=$a_next?> : ������ ��ũ

  <?=hide_prev_start?> <?=$hide_prev_end?> : ������ ��Ÿ����/ �����
  <?=hide_next_start?> <?=$hide_next_end?> : ������ ��Ÿ����/ �����
 
  ��Ÿ �����̳� �۾��̵��� ���� ����Ÿ���� �տ� prev_ , next_ �� �� ���ΰ���;
  ex) ������ ���� : <?=$prev_subject?>
  
  */ 
///////////////////////////////////////////////////////////////////////////// ?>

<table border=0 cellspacing=3 cellpadding=3 width=<?=$width?>>
<col width=></col>
	<td colspan=8 height=1 class=line></td>
<tr>
 <td colspan="2" style='word-break:break-all;'  align=center height=35><b><?=$subject?></b></td>
</tr>
	<td colspan=8 height=1 class=line></td>
<tr>
<td> &nbsp;<?=$name?>&nbsp;<?=$hide_homepage_start?>
 <font class=en>/&nbsp;&nbsp;<?=$homepage?></font>
<?=$hide_homepage_end?></td>
<td align=right class=en>hit : &nbsp;<?=$hit?>&nbsp;&nbsp;</td>
</tr>
	<td colspan=8 height=1 class=line></td>

<?=$hide_sitelink1_start?>
<tr>
 <td  colspan="2" align=left class=en> &nbsp;link1&nbsp;/&nbsp;&nbsp;<?=$sitelink1?></td>
</tr>
	<td colspan=8 height=1 class=line></td>
<?=$hide_sitelink1_end?>

<?=$hide_sitelink2_start?>
<tr>
 <td  colspan="2" align=left  class=en> &nbsp;link2&nbsp;/&nbsp;&nbsp;<?=$sitelink2?></td>
</tr>
	<td colspan=8 height=1 class=line></td>
<?=$hide_sitelink2_end?>

<?=$hide_download1_start?>
<tr>
 <td  colspan="2" align=left class=en> &nbsp;file&nbsp;/&nbsp;&nbsp;<?=$a_file_link1?><?=$file_name1?></td>
</tr>
	<td colspan=8 height=1 class=line></td>
<?=$hide_download1_end?>
<?=$hide_download2_start?>
<tr>
 <td  colspan="2" align=left class=en> &nbsp;file&nbsp;/&nbsp;&nbsp;<?=$a_file_link2?><?=$file_name2?></td>
</tr>
	<td colspan=8 height=1 class=line></td>
<?=$hide_download2_end?>




<tr>
 <td colspan=2 style='word-break:break-all;padding:10' height=80 >
     <span style=line-height:160%>
     <?=$upload_image1?>
     <?=$upload_image2?>
     <?=$memo?>
     <br>
     <div align=right style=font-family:tahoma;font-size=7pt><?=$ip?></div>
     </span>
 </td>
</tr>
</table>

<!-- ������ ��� �����ϴ� �κ� -->
<?=$hide_comment_start?> 
<Br>
<table cellspacing=0 cellpadding=7 width=<?=$width?> style="border-width:1; border-color:#e7e7e7; border-style:solid;">
<col width=80></col><col width=></col><col width=30></col>
