<? $use_view_list_skin=1; ?>
<?$coloring=0;?>
<form method="post" name="list" action="list_all.php">
<input type="hidden" name="page" value="<?=$page?>" />
<input type="hidden" name="id" value="<?=$id?>" />
<input type="hidden" name="select_arrange" value="<?=$select_arrange?>" />
<input type="hidden" name="desc" value="<?=$desc?>" />
<input type="hidden" name="page_num" value="<?=$page_num?>" />
<input type="hidden" name="selected" />
<input type="hidden" name="exec" />
<input type="hidden" name="keyword" value="<?=$keyword?>" />
<input type="hidden" name="sn" value="<?=$sn?>" />
<input type="hidden" name="ss" value="<?=$ss?>" />
<input type="hidden" name="sc" value="<?=$sc?>" />

<table border="0" cellspacing="0" class="boardlisttext">
<!-- ���� -->
<thead>
<tr>
<th scope="col">��ȣ</th>
<th scope="col">����</th>
<th scope="col">�ۼ���</th>
<th scope="col">�ۼ���</th>
<th scope="col"><?=$a_hit?>��ȸ</a></th>
<th scope="col" class="good"><?=$a_vote?>��õ</a></th>
</tr>
</thead>