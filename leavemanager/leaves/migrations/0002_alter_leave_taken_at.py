# Generated by Django 3.2.4 on 2021-06-14 16:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leaves', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='leave',
            name='taken_at',
            field=models.DateField(null=True),
        ),
    ]
