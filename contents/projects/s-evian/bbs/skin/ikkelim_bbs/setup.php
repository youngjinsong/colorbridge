<? 
  /*
  �� ������ �Խ��ǿ��� ����� ���¸� �����ݴϴ�.
  
  <?=$width?> : �Խ����� ����ũ��
  <?=$dir?> : ��Ų���丮�� ����ŵ�ϴ�.
  <?=$total?> : ��ü �ۼ�
  <?=$total_page?> : ��ü ��������
  <?=$a_status?> : ��踵ũ
  <?=$a_login?> : �α��� ��ư
  <?=$a_logout?> : �α׿�����ư
  <?=$page?> : ���������� ǥ��

  <?=$a_member_join?> : ȸ������
  <?=$a_member_modify?> : ȸ����������
  <?=$a_member_memo?> : ����;;
  <?=$member_memo_icon?> : ����������;;
  <?=$memo_on_sound?> : ������ ������ �Ҹ� ������ ���� memo_on.swf

  <?=$total_connect?> : ���� ��ü ȸ�� �α��μ�
  <?=$group_connect?> : ���� �׷� �α��μ�

  * ������������ member_memo_on.gif, member_memo_off.gif ������ �ֽ��ϴ�. (�⺻)
    member_memo_on.gif�� ���ο� ������ ������, �۰� member_memo_off.gif�� �������� �������Դϴ�;;

  */ 
?>

<table border=0 cellspacing=0 cellpadding=0 width=<?=$width?>>
<tr>
  <td height=27><? include "include/print_category.php"; ?>
    <?=$memo_on_sound?>
  </td>
  <td align=right class=en>
    <?=$a_login?>login </a>
    <?=$a_member_join?> join </a>
    <?=$a_member_modify?>modify </a>
    <?=$a_member_memo?>memo </a>
    <?=$a_logout?>logout </a>
    <?=$a_setup?>admin </a>
    &nbsp;
  </td>
</tr>
</table>

<? 
 if($setup[use_category]) 
 { 
?>
<table border=0 width=<?=$width?> cellspacing=0 cellpadding=0>
<col width=100></col><col width=10></col><col width=></col>
<tr valign=top>
  <td align=right>

<? 
 $width="100%";
 }
?>
