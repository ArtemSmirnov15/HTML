*Задача 1 *
```
<?php
// формируем массив c опытом работы
$job = [
'job_name' => ['GB', 'Бэттери Тим', 'Студия Лебедева'],
'job_data' => ['2022-настоящее время', '2000-2006', '1999-2000'],
'job_desc' => ['Много интересной работы', 'Разная работа', 'Очень много креативной работы']
]
?>

<div class="w3-container w3-card w3-white w3-margin-bottom">
<h2 class="w3-text-grey w3-padding-16"><i
class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Опыт работы</h2>
<div class="w3-container">
<h5 class="w3-opacity"><b>
<?php echo $job['job_name'][0]; ?>
</b></h5>
<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>
<?php echo $job['job_data'][0]; ?>
</h6>
<p>
<?php echo $job['job_desc'][0]; ?>
</p>
<hr>
</div>
<div class="w3-container">
<h5 class="w3-opacity"><b>
<?php echo $job['job_name'][1]; ?>
</b></h5>
<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>
<?php echo $job['job_data'][1]; ?>
</h6>
<p>
<?php echo $job['job_desc'][1]; ?>
</p>
<hr>
</div>
<div class="w3-container">
<h5 class="w3-opacity"><b>
<?php echo $job['job_name'][2]; ?>
</b></h5>
<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>
<?php echo $job['job_data'][2]; ?>
</h6>
<p>
<?php echo $job['job_desc'][2]; ?>
</p><br>
</div>
</div>

[]()
**Задача 2 **

-- create
CREATE TABLE EMPLOYEE (
id INTEGER PRIMARY KEY,
name TEXT NOT NULL,
age TEXT NOT NULL,
address TEXT NOT NULL
);

-- insert
INSERT INTO EMPLOYEE VALUES (0001, 'Иван', '18', 'Москва');
INSERT INTO EMPLOYEE VALUES (0002, 'Петр', '22', 'Иваново');
INSERT INTO EMPLOYEE VALUES (0003, 'Анна', '35', 'Питер');
INSERT INTO EMPLOYEE VALUES (0004, 'Юлия', '18', 'Москва');
INSERT INTO EMPLOYEE VALUES (0005, 'Николай', '36', 'Москва');