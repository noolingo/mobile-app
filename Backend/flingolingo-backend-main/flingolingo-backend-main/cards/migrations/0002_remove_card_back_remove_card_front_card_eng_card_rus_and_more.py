# Generated by Django 4.2 on 2023-04-18 17:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cards', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='card',
            name='back',
        ),
        migrations.RemoveField(
            model_name='card',
            name='front',
        ),
        migrations.AddField(
            model_name='card',
            name='eng',
            field=models.CharField(default='pass', max_length=50, verbose_name='слово на английском'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='card',
            name='rus',
            field=models.CharField(default='pass', max_length=50, verbose_name='слово на русском'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='card',
            name='transcription',
            field=models.CharField(default='pass', max_length=50, verbose_name='транскрипция'),
            preserve_default=False,
        ),
    ]