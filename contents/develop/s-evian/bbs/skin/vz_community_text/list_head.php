<?$coloring=0;?>
<?	$a_vote2="<a onfocus=blur() href='$PHP_SELF?$href&select_arrange=vote&desc=$t_desc'>";?>
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
<?$a_vote = str_replace(">",">",$a_vote);?>
<table border="0" cellspacing="0" class="boardlisttext">
<!-- ���� -->
<thead>
<tr>
<th scope="col">��ȣ</th>
<th scope="col">����</th>
<th scope="col">�ۼ���</th>
<th scope="col">�ۼ���</th>
<th scope="col"><?=$a_hit?>��ȸ</a></th>
<th scope="col" class="good"><?=$a_vote2?>��õ</a></th>
</tr>
</thead>
<tbody>